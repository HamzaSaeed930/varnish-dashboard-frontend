/**
 * Server API Route for Performance Testing
 * 
 * This endpoint proxies requests to performance testing APIs (PageSpeed Insights, etc.)
 * This protects API keys and avoids CORS issues.
 * 
 * Usage:
 * POST /api/performance/test
 * Body: { url: string, strategy?: 'mobile' | 'desktop' }
 */

import axios from 'axios'

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig()
    const body = await readBody(event)
    
    const { url, strategy = 'mobile' } = body

    // Validate URL
    if (!url || typeof url !== 'string') {
      throw createError({
        statusCode: 400,
        message: 'URL is required',
      })
    }

    // Validate URL format
    try {
      new URL(url.startsWith('http') ? url : `https://${url}`)
    } catch {
      throw createError({
        statusCode: 400,
        message: 'Invalid URL format',
      })
    }

    // Get API key from server-side config (not exposed to client)
    const pageSpeedApiKey = config.pageSpeedApiKey || process.env.PAGESPEED_API_KEY

    if (!pageSpeedApiKey) {
      // If no API key, return mock data for development
      console.warn('PageSpeed API key not configured. Returning mock data.')
      return {
        success: true,
        data: {
          overallScore: 42,
          metrics: [
            {
              name: 'First Contentful Paint',
              value: '1.4 s',
              comparison: '100% Compared to Standard',
            },
            {
              name: 'Largest Contentful Paint',
              value: '2.1 s',
              comparison: '95% Compared to Standard',
            },
            {
              name: 'Total Blocking Time',
              value: '150 ms',
              comparison: '90% Compared to Standard',
            },
            {
              name: 'Speed Index',
              value: '3.2 s',
              comparison: '85% Compared to Standard',
            },
          ],
          issuesCount: 8,
          mock: true,
        },
      }
    }

    // Call Google PageSpeed Insights API
    const formattedUrl = url.startsWith('http') ? url : `https://${url}`
    
    const response = await axios.get(
      'https://www.googleapis.com/pagespeedonline/v5/runPagespeed',
      {
        params: {
          url: formattedUrl,
          key: pageSpeedApiKey,
          strategy: strategy,
          category: 'performance',
        },
        timeout: 30000, // 30 second timeout
      }
    )

    const data = response.data
    const lighthouse = data.lighthouseResult
    const audits = lighthouse.audits

    // Extract key metrics
    const performanceScore = Math.round(
      lighthouse.categories.performance.score * 100
    )

    // Format metrics
    const formatMetric = (audit: any) => {
      if (!audit || !audit.displayValue) return 'N/A'
      return audit.displayValue
    }

    const metrics = [
      {
        name: 'First Contentful Paint',
        value: formatMetric(audits['first-contentful-paint']),
        comparison: 'Compared to Standard',
      },
      {
        name: 'Largest Contentful Paint',
        value: formatMetric(audits['largest-contentful-paint']),
        comparison: 'Compared to Standard',
      },
      {
        name: 'Total Blocking Time',
        value: formatMetric(audits['total-blocking-time']),
        comparison: 'Compared to Standard',
      },
      {
        name: 'Speed Index',
        value: formatMetric(audits['speed-index']),
        comparison: 'Compared to Standard',
      },
    ]

    // Count opportunities/issues
    const opportunities = Object.values(audits).filter(
      (audit: any) =>
        audit.details?.type === 'opportunity' &&
        audit.score !== null &&
        audit.score < 1
    )

    return {
      success: true,
      data: {
        overallScore: performanceScore,
        metrics: metrics,
        issuesCount: opportunities.length,
        rawData: {
          // Include some raw data if needed
          firstContentfulPaint: audits['first-contentful-paint']?.numericValue,
          largestContentfulPaint: audits['largest-contentful-paint']?.numericValue,
          totalBlockingTime: audits['total-blocking-time']?.numericValue,
          speedIndex: audits['speed-index']?.numericValue,
        },
      },
    }
  } catch (error: any) {
    console.error('Performance API Error:', error)

    // Handle axios errors
    if (error.response) {
      throw createError({
        statusCode: error.response.status,
        message: error.response.data?.error?.message || 'API request failed',
      })
    }

    // Handle other errors
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Failed to fetch performance data',
    })
  }
})




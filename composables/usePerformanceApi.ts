/**
 * Performance Testing API Composable
 * 
 * This composable provides functions to fetch real website performance data
 * using various APIs like Google PageSpeed Insights, WebPageTest, etc.
 * 
 * Recommended: Use a backend proxy to protect API keys and handle CORS
 */

import axios from 'axios'

export const usePerformanceApi = () => {
  const config = useRuntimeConfig()
  
  /**
   * Fetch performance data using Google PageSpeed Insights API
   * 
   * ⚠️ SECURITY WARNING: This function requires API key in public config which is NOT SECURE
   * ⚠️ DO NOT USE IN PRODUCTION - Use getPerformanceViaBackend() instead
   * 
   * @param url - The website URL to test
   * @param strategy - 'mobile' or 'desktop' (default: 'mobile')
   * @returns Performance data including score and metrics
   */
  const getPageSpeedInsights = async (
    url: string,
    strategy: 'mobile' | 'desktop' = 'mobile'
  ) => {
    try {
      // ⚠️ SECURITY WARNING: This method exposes API keys to the client
      // This is NOT recommended for production use
      // Use getPerformanceViaBackend() instead which keeps API keys secure on the server
      
      const apiKey = config.public.pageSpeedApiKey
      if (!apiKey) {
        throw new Error('PageSpeed Insights API key not configured. Use getPerformanceViaBackend() for secure server-side API calls.')
      }

      const response = await axios.get(
        'https://www.googleapis.com/pagespeedonline/v5/runPagespeed',
        {
          params: {
            url: url,
            key: apiKey,
            strategy: strategy,
            category: 'performance',
          },
        }
      )

      const data = response.data
      const lighthouse = data.lighthouseResult
      const audits = lighthouse.audits

      // Extract key metrics
      const metrics = {
        performanceScore: Math.round(
          lighthouse.categories.performance.score * 100
        ),
        firstContentfulPaint: audits['first-contentful-paint']?.displayValue || 'N/A',
        largestContentfulPaint: audits['largest-contentful-paint']?.displayValue || 'N/A',
        totalBlockingTime: audits['total-blocking-time']?.displayValue || 'N/A',
        speedIndex: audits['speed-index']?.displayValue || 'N/A',
        cumulativeLayoutShift: audits['cumulative-layout-shift']?.displayValue || 'N/A',
        timeToInteractive: audits['interactive']?.displayValue || 'N/A',
      }

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
          overallScore: metrics.performanceScore,
          metrics: [
            {
              name: 'First Contentful Paint',
              value: metrics.firstContentfulPaint,
              comparison: 'Compared to Standard',
            },
            {
              name: 'Largest Contentful Paint',
              value: metrics.largestContentfulPaint,
              comparison: 'Compared to Standard',
            },
            {
              name: 'Total Blocking Time',
              value: metrics.totalBlockingTime,
              comparison: 'Compared to Standard',
            },
            {
              name: 'Speed Index',
              value: metrics.speedIndex,
              comparison: 'Compared to Standard',
            },
          ],
          issuesCount: opportunities.length,
          rawData: data,
        },
      }
    } catch (error: any) {
      console.error('PageSpeed Insights API Error:', error)
      return {
        success: false,
        error: error.message || 'Failed to fetch performance data',
        data: null,
      }
    }
  }

  /**
   * Fetch performance data via backend proxy (RECOMMENDED)
   * 
   * This method calls your Nuxt server API route which then calls PageSpeed Insights
   * This protects your API keys and avoids CORS issues
   * 
   * @param url - The website URL to test
   * @param strategy - 'mobile' or 'desktop' (default: 'mobile')
   * @returns Performance data
   */
  const getPerformanceViaBackend = async (
    url: string,
    strategy: 'mobile' | 'desktop' = 'mobile'
  ) => {
    try {
      // Use Nuxt's $fetch which automatically handles the base URL
      // This calls the server API route at /api/performance/test
      const response = await $fetch('/api/performance/test', {
        method: 'POST',
        body: {
          url: url,
          strategy: strategy,
        },
      })

      return {
        success: true,
        data: response.data || response,
      }
    } catch (error: any) {
      console.error('Performance API Error:', error)
      return {
        success: false,
        error: error.message || error.data?.message || 'Failed to fetch performance data',
        data: null,
      }
    }
  }

  /**
   * Fetch performance data using WebPageTest API
   * 
   * @param url - The website URL to test
   * @param location - Test location (default: 'Dulles:Chrome')
   * @returns Performance data
   */
  const getWebPageTest = async (
    url: string,
    location: string = 'Dulles:Chrome'
  ) => {
    try {
      const apiKey = config.public.webPageTestApiKey
      if (!apiKey) {
        throw new Error('WebPageTest API key not configured')
      }

      // Step 1: Start test
      const testResponse = await axios.get(
        'https://www.webpagetest.org/runtest.php',
        {
          params: {
            url: url,
            k: apiKey,
            f: 'json',
            runs: 1,
            location: location,
          },
        }
      )

      const testId = testResponse.data.data.testId

      // Step 2: Poll for results (tests can take 30-60 seconds)
      let attempts = 0
      const maxAttempts = 30

      while (attempts < maxAttempts) {
        await new Promise((resolve) => setTimeout(resolve, 2000)) // Wait 2 seconds

        const resultResponse = await axios.get(
          'https://www.webpagetest.org/jsonResult.php',
          {
            params: {
              test: testId,
            },
          }
        )

        const status = resultResponse.data.statusCode

        if (status === 200) {
          const data = resultResponse.data.data
          const runs = data.runs[1] // Get first run
          const firstView = runs.firstView

          return {
            success: true,
            data: {
              overallScore: Math.round(
                (firstView.TTFB + firstView.render + firstView.loadTime) / 3
              ), // Calculate approximate score
              metrics: [
                {
                  name: 'First Contentful Paint',
                  value: `${(firstView.firstContentfulPaint / 1000).toFixed(1)} s`,
                  comparison: 'Compared to Standard',
                },
                {
                  name: 'Speed Index',
                  value: `${(firstView.SpeedIndex / 1000).toFixed(1)} s`,
                  comparison: 'Compared to Standard',
                },
                {
                  name: 'Load Time',
                  value: `${(firstView.loadTime / 1000).toFixed(1)} s`,
                  comparison: 'Compared to Standard',
                },
                {
                  name: 'Time to Interactive',
                  value: `${(firstView.TTI / 1000).toFixed(1)} s`,
                  comparison: 'Compared to Standard',
                },
              ],
              issuesCount: firstView.requests || 0,
              rawData: data,
            },
          }
        }

        attempts++
      }

      throw new Error('Test timed out')
    } catch (error: any) {
      console.error('WebPageTest API Error:', error)
      return {
        success: false,
        error: error.message || 'Failed to fetch performance data',
        data: null,
      }
    }
  }

  /**
   * Get performance data (wrapper that tries different methods)
   * 
   * @param url - The website URL to test
   * @param method - 'pagespeed' | 'webpagetest' | 'backend' (default: 'backend')
   * @returns Performance data
   */
  const getPerformanceData = async (
    url: string,
    method: 'pagespeed' | 'webpagetest' | 'backend' = 'backend'
  ) => {
    switch (method) {
      case 'pagespeed':
        return await getPageSpeedInsights(url)
      case 'webpagetest':
        return await getWebPageTest(url)
      case 'backend':
      default:
        return await getPerformanceViaBackend(url)
    }
  }

  return {
    getPageSpeedInsights,
    getWebPageTest,
    getPerformanceViaBackend,
    getPerformanceData,
  }
}


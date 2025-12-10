<template>
  <div
    class="min-h-screen cursor-pointer relative overflow-hidden"
    style="background: #0C1E35 !important;"
    @click="goToLogin"
  >
    <!-- Background Pattern -->
    <!-- <div
      class="absolute inset-0 opacity-100"
      style="
        background-image: url('/images/Lines.png');
        background-repeat: repeat;
        background-size: cover;
        background-position: center;
        pointer-events: none;
        z-index: 0;
        width: 60%;
        height: 40%;
        margin: 0% 20%;
      "
    ></div> -->
    <div class="max-w-6xl mx-auto relative z-10 mt-8 md:mt-16 lg:mt-24 px-4 md:px-6 lg:px-0" @click.stop>
      <!-- Header -->
      <div class="text-center mb-6 md:mb-8">
        <h1
          class="mb-2 text-xl md:text-2xl lg:text-[30px]"
          style="
            font-family: 'Geist', sans-serif;
            font-weight: 600;
            font-style: SemiBold;
            line-height: 100%;
            letter-spacing: -5%;
            text-align: center;
            vertical-align: middle;
            text-transform: capitalize;
            color: #FFFFFF;
          "
        >
          Running Performance Tests
        </h1>
        <p
          class="text-xs md:text-sm lg:text-sm px-4"
          style="
            font-family: 'Geist', sans-serif;
            font-weight: 400;
            font-style: Regular;
            line-height: 20px;
            letter-spacing: 0%;
            text-align: center;
            color: #BBBBBB;
          "
        >
          Analyzing your website performance. This may take a few moments
        </p>
      </div>

      <!-- Results Card -->
      <div
        class="rounded-2xl p-4 md:p-6 lg:p-8 shadow-xl"
        style="background: transparent; box-shadow: none;"
      >
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          <!-- Overall Performance Card -->
          <div 
            class="lg:col-span-1 relative transition-all duration-700 ease-out p-6 md:p-[5%]"
            :style="{
              background: '#ffffff',
              borderRadius: '12px',
              opacity: isLoading ? 0 : overallScore > 0 ? 1 : 0,
              transform: isLoading ? 'translateY(20px)' : overallScore > 0 ? 'translateY(0)' : 'translateY(20px)',
            }"
          >
            <!-- Menu Icon -->
            <button
              class="absolute top-0 right-0 text-gray-400 hover:text-gray-600" style="padding: 5%;"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </button>
            
            <h3
              class="mb-6"
              style="
                font-family: 'Geist', sans-serif;
                font-weight: 600;
                font-size: 20px;
                line-height: 28px;
                color: #111827;
              "
            >
              Overall Performance
            </h3>

            <!-- Circular Progress -->
            <div class="flex justify-center mb-4">
              <div class="relative w-40 h-40 md:w-44 md:h-44 lg:w-48 lg:h-48">
                <svg class="transform -rotate-90 w-full h-full" viewBox="0 0 192 192" preserveAspectRatio="xMidYMid meet">
                  <!-- Background circle -->
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    fill="none"
                    stroke="#e5e7eb"
                    stroke-width="16"
                  />
                  <!-- Progress circle -->
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    fill="none"
                    :stroke="getScoreColor(overallScore)"
                    stroke-width="16"
                    stroke-linecap="round"
                    :stroke-dasharray="circumference"
                    :stroke-dashoffset="getStrokeDashoffset(overallScore)"
                    class="transition-all duration-1000"
                  />
                </svg>
                <!-- Score Text -->
                <div
                  class="absolute inset-0 flex flex-col items-center justify-center"
                >
                  <span
                    class="text-3xl md:text-4xl lg:text-[48px]"
                    style="
                      font-family: 'Geist', sans-serif;
                      font-weight: 600;
                      line-height: 56px;
                      color: #111827;
                    "
                  >
                    {{ overallScore }}%
                  </span>
                  <span
                    class="text-xs md:text-sm lg:text-sm"
                    style="
                      font-family: 'Geist', sans-serif;
                      font-weight: 400;
                      line-height: 20px;
                      color: #6b7280;
                    "
                  >
                    Overall Score
                  </span>
                </div>
              </div>
            </div>

            <!-- Disclaimer -->
            <p
              class="text-xs text-center mt-4"
              style="
                font-family: 'Geist', sans-serif;
                font-weight: 400;
                font-size: 12px;
                line-height: 16px;
                color: #6b7280;
              "
            >
              Values are estimated and may vary. The performance score is
              calculated from these metrics. See Calculator.
            </p>
          </div>

          <!-- Metrics Grid -->
          <div class="lg:col-span-2">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-4">
              <!-- First Contentful Paint Cards -->
              <div
                v-for="(metric, index) in metrics"
                :key="index"
                class="bg-white rounded-xl border relative flex flex-col transition-all duration-700 ease-out"
                :style="{
                  minHeight: '140px',
                  height: 'auto',
                  borderRadius: '12px',
                  border: '1px solid #EAECF0',
                  background: '#FFFFFF',
                  padding: '20px',
                  gap: '8px',
                  boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                  boxSizing: 'border-box',
                  opacity: isLoading ? 0 : metric.animated ? 1 : 0,
                  transform: isLoading ? 'translateY(20px)' : metric.animated ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${index * 0.15}s`,
                }"
                :class="{
                  'md:h-[167.5px]': true,
                }"
              >
                <!-- Menu Icon -->
                <button
                  class="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </button>

                <!-- Metric Title -->
                <h4
                  class="text-sm md:text-base lg:text-base mb-2"
                  style="
                    font-family: 'Geist', sans-serif;
                    font-weight: 600;
                    line-height: 24px;
                    letter-spacing: 0%;
                    color: #101828;
                  "
                >
                  {{ metric.name }}
                </h4>

                <!-- Metric Value -->
                <p
                  class="text-2xl md:text-3xl lg:text-[36px] mb-2"
                  style="
                    font-family: 'Geist', sans-serif;
                    font-weight: 600;
                    font-style: SemiBold;
                    line-height: 44px;
                    letter-spacing: -2%;
                    color: #101828;
                  "
                >
                  {{ metric.value }}
                </p>

                <!-- Comparison -->
                <div class="flex items-center gap-1">
                  <!-- Green Arrow -->
                  <svg
                    class="w-4 h-4 flex-shrink-0"
                    style="color: #079455;"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                  <!-- 100% Text -->
                  <span
                    style="
                      font-family: 'Inter', sans-serif;
                      font-weight: 500;
                      font-size: 14px;
                      line-height: 20px;
                      letter-spacing: 0%;
                      text-align: center;
                      color: #079455;
                    "
                  >
                    100%
                  </span>
                  <!-- Compared to Standard Text -->
                  <span
                    style="
                      font-family: 'Geist', sans-serif;
                      font-weight: 500;
                      font-style: Medium;
                      font-size: 14px;
                      line-height: 20px;
                      letter-spacing: 0%;
                      color: #475467;
                    "
                  >
                    Compared to Standard
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Issues Banner -->
        <div class="mt-4 md:mt-6 flex justify-center px-4">
          <div
            class="rounded-full flex items-center justify-between cursor-pointer hover:opacity-90 transition-all duration-700 ease-out w-full max-w-[395px]"
            :style="{
              minHeight: '30px',
              borderRadius: '9999px',
              border: '1px solid #EAECF0',
              background: '#C7C7CC',
              padding: '8px 10px 8px 8px',
              gap: '8px',
              boxSizing: 'border-box',
              opacity: isLoading ? 0 : issuesCount > 0 ? 1 : 0,
              transform: isLoading ? 'translateY(20px)' : issuesCount > 0 ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '0.6s',
            }"
          >
            <div class="flex items-center gap-2 flex-1 min-w-0" style="gap: 8px;">
              <!-- Issues Badge -->
              <span
                class="rounded-full flex items-center justify-center flex-shrink-0 text-xs"
                style="
                  min-width: 53px;
                  height: 22px;
                  border-radius: 9999px;
                  border: 1px solid #EAECF0;
                  background: #FFFFFF;
                  padding: 2px 12px;
                  font-family: 'Geist', sans-serif;
                  font-weight: 500;
                  line-height: 18px;
                  letter-spacing: 0%;
                  text-align: center;
                  color: #344054;
                  box-sizing: border-box;
                "
              >
                Issues
              </span>
              <!-- Issues Text -->
              <span
                class="text-xs truncate"
                style="
                  font-family: 'Geist', sans-serif;
                  font-weight: 500;
                  line-height: 18px;
                  letter-spacing: -1%;
                  color: #344054;
                "
              >
                {{ issuesCount }} Speed issues detected. Optimization potential
                is high
              </span>
            </div>
            <svg
              class="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"
              style="color: #344054;"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>

        <!-- Continue to Login Button -->
        <div class="mt-4 md:mt-6 flex justify-center px-4">
          <button
            @click.stop="goToLogin"
            class="relative overflow-hidden transition-all hover:opacity-90 w-full max-w-[395px]"
            style="
              height: 43px;
              border-radius: 6px;
              background: #182230;
              border: none;
              font-family: 'Geist', sans-serif;
              font-weight: 600;
              font-style: SemiBold;
              font-size: 14px;
              line-height: 24px;
              letter-spacing: 0%;
              color: #FFFFFF;
              box-sizing: border-box;
              cursor: pointer;
            "
            :class="{
              'md:text-base': true,
            }"
          >
            <!-- Gradient Overlay -->
            <span
              class="absolute inset-0 rounded-lg pointer-events-none"
              style="
                background: linear-gradient(177.61deg, rgba(255, 255, 255, 0) 2%, rgba(255, 255, 255, 0.12) 98.17%);
              "
            ></span>
            <span class="relative z-10">Continue to Login</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Page metadata
useHead({
  title: 'Performance Test Results - Varnish',
  bodyAttrs: {
    style: 'background-color: #0C1E35 !important;',
  },
})

const route = useRoute()

// Performance data state
const overallScore = ref(0)
const issuesCount = ref(0)
const isLoading = ref(true)
const error = ref(null)

// Store original values for animation
const targetOverallScore = ref(42)
const targetIssuesCount = ref(8)
const targetMetrics = ref([
  {
    name: 'First Contentful Paint',
    value: '1.4 s',
    comparison: '100% Compared to Standard',
  },
  {
    name: 'Largest Contentful Paint',
    value: '2.1 s',
    comparison: '100% Compared to Standard',
  },
  {
    name: 'Total Blocking Time',
    value: '150 ms',
    comparison: '100% Compared to Standard',
  },
  {
    name: 'Speed Index',
    value: '3.2 s',
    comparison: '100% Compared to Standard',
  },
])

// Animated metrics with initial values
const metrics = ref([
  {
    name: 'First Contentful Paint',
    value: '0.0 s',
    comparison: '100% Compared to Standard',
    animated: false,
  },
  {
    name: 'Largest Contentful Paint',
    value: '0.0 s',
    comparison: '100% Compared to Standard',
    animated: false,
  },
  {
    name: 'Total Blocking Time',
    value: '0 ms',
    comparison: '100% Compared to Standard',
    animated: false,
  },
  {
    name: 'Speed Index',
    value: '0.0 s',
    comparison: '100% Compared to Standard',
    animated: false,
  },
])

// Helper function to parse metric value (extract number from string like "1.4 s" or "150 ms")
const parseMetricValue = (valueStr) => {
  const match = valueStr.match(/([\d.]+)/)
  return match ? parseFloat(match[1]) : 0
}

// Helper function to format metric value back
const formatMetricValue = (value, unit) => {
  if (unit === 'ms') {
    return `${Math.round(value)} ms`
  }
  return `${value.toFixed(1)} s`
}

// Animate a single metric
const animateMetric = (index, targetValue) => {
  const unit = targetValue.includes('ms') ? 'ms' : 's'
  const targetNum = parseMetricValue(targetValue)
  let currentNum = 0
  const increment = targetNum / 30 // 30 steps
  const duration = 30 // milliseconds per step

  const interval = setInterval(() => {
    currentNum += increment
    if (currentNum >= targetNum) {
      currentNum = targetNum
      clearInterval(interval)
      metrics.value[index].animated = true
    }
    metrics.value[index].value = formatMetricValue(currentNum, unit)
  }, duration)
}

// Animate all metrics sequentially
const animateAllMetrics = () => {
  targetMetrics.value.forEach((targetMetric, index) => {
    // Update metric name and comparison from target
    if (metrics.value[index]) {
      metrics.value[index].name = targetMetric.name
      metrics.value[index].comparison = targetMetric.comparison
      // Mark as visible for fade-in animation
      metrics.value[index].animated = true
    }
    
    setTimeout(() => {
      animateMetric(index, targetMetric.value)
    }, index * 200) // Stagger animations by 200ms
  })
}

// Animate issues count
const animateIssuesCount = () => {
  let currentCount = 0
  const increment = targetIssuesCount.value > 0 ? Math.max(1, Math.ceil(targetIssuesCount.value / 20)) : 0
  const interval = setInterval(() => {
    currentCount += increment
    if (currentCount >= targetIssuesCount.value) {
      currentCount = targetIssuesCount.value
      clearInterval(interval)
    }
    issuesCount.value = currentCount
  }, 30)
}

// Animate overall score
const animateOverallScore = () => {
  let currentScore = 0
  const increment = targetOverallScore.value > 0 ? Math.max(1, Math.ceil(targetOverallScore.value / 30)) : 0
  const interval = setInterval(() => {
    currentScore += increment
    if (currentScore >= targetOverallScore.value) {
      currentScore = targetOverallScore.value
      clearInterval(interval)
    }
    overallScore.value = currentScore
  }, 30)
}

// Fetch performance data on mount
onMounted(async () => {
  const url = route.query.url
  
  // Check if data was passed via query (from loading page)
  if (route.query.data) {
    try {
      const data = JSON.parse(String(route.query.data))
      targetOverallScore.value = data.overallScore || 42
      targetIssuesCount.value = data.issuesCount || 8
      if (data.metrics && Array.isArray(data.metrics)) {
        targetMetrics.value = data.metrics
      }
      isLoading.value = false
      
      // Start animations after data is loaded
      setTimeout(() => {
        animateOverallScore()
        animateIssuesCount()
        animateAllMetrics()
      }, 100)
      return
    } catch (e) {
      console.error('Error parsing query data:', e)
    }
  }

  // If no data in query, fetch it directly
  if (url) {
    try {
      isLoading.value = true
      const { getPerformanceData } = usePerformanceApi()
      const result = await getPerformanceData(decodeURIComponent(String(url)), 'backend')

      if (result.success && result.data) {
        targetOverallScore.value = result.data.overallScore || 42
        targetIssuesCount.value = result.data.issuesCount || 8
        if (result.data.metrics && Array.isArray(result.data.metrics)) {
          targetMetrics.value = result.data.metrics
        }
        
        // Start animations after data is loaded
        setTimeout(() => {
          animateOverallScore()
          animateIssuesCount()
          animateAllMetrics()
        }, 100)
      } else {
        error.value = result.error || 'Failed to fetch performance data'
      }
    } catch (err) {
      console.error('Error fetching performance data:', err)
      error.value = err?.message || 'An error occurred while fetching performance data'
    } finally {
      isLoading.value = false
    }
  } else {
    isLoading.value = false
    error.value = 'No URL provided'
  }
})

// Calculate circumference for circular progress
// Using fixed radius of 88 (192/2 - 8) since SVG uses fixed viewBox
const circumference = 2 * Math.PI * 88

// Get stroke dash offset for progress
const getStrokeDashoffset = (score) => {
  const progress = score / 100
  return circumference * (1 - progress)
}

// Get color based on score
const getScoreColor = (score) => {
  if (score >= 80) return '#10b981' // green
  if (score >= 50) return '#f59e0b' // yellow
  return '#ef4444' // red
}

// Navigate to login page
const goToLogin = () => {
  navigateTo('/login')
}

// View optimization results
const viewOptimizationResults = () => {
  // Navigate to optimization results page or show modal
  // For now, just log
  console.log('View optimization results for:', route.query.url)
  // You can navigate to a detailed results page here
}
</script>


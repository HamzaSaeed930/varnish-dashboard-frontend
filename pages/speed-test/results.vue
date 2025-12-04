<template>
  <div
    class="min-h-screen py-12 px-6"
    style="
      background: #0C1E35;
      background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0);
      background-size: 40px 40px;
    "
  >
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1
          class="mb-2"
          style="
            font-family: 'Geist', sans-serif;
            font-weight: 600;
            font-style: SemiBold;
            font-size: 30px;
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
          style="
            font-family: 'Geist', sans-serif;
            font-weight: 400;
            font-style: Regular;
            font-size: 14px;
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
        class=" rounded-2xl p-8 shadow-xl"
        style="background: transparent; box-shadow: none;"
      >
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Overall Performance Card -->
          <div class="lg:col-span-1 relative" style="background: #ffffff; border-radius: 12px; padding: 5%;">
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
              <div class="relative w-48 h-48">
                <svg class="transform -rotate-90 w-48 h-48">
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
                    style="
                      font-family: 'Geist', sans-serif;
                      font-weight: 600;
                      font-size: 48px;
                      line-height: 56px;
                      color: #111827;
                    "
                  >
                    {{ overallScore }}%
                  </span>
                  <span
                    style="
                      font-family: 'Geist', sans-serif;
                      font-weight: 400;
                      font-size: 14px;
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
            <div class="grid grid-cols-2 gap-4" style="gap: 16px;">
              <!-- First Contentful Paint Cards -->
              <div
                v-for="(metric, index) in metrics"
                :key="index"
                class="bg-white rounded-xl border relative flex flex-col"
                style="
                  width: 297.5px;
                  height: 167.5px;
                  border-radius: 12px;
                  border: 1px solid #EAECF0;
                  background: #FFFFFF;
                  padding: 24px;
                  gap: 8px;
                  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
                  box-sizing: border-box;
                "
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
                  style="
                    font-family: 'Geist', sans-serif;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 24px;
                    letter-spacing: 0%;
                    color: #101828;
                    margin-bottom: 8px;
                  "
                >
                  {{ metric.name }}
                </h4>

                <!-- Metric Value -->
                <p
                  style="
                    font-family: 'Geist', sans-serif;
                    font-weight: 600;
                    font-style: SemiBold;
                    font-size: 36px;
                    line-height: 44px;
                    letter-spacing: -2%;
                    color: #101828;
                    margin-bottom: 8px;
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
        <div class="mt-6 flex justify-center">
          <div
            class="rounded-full flex items-center justify-between cursor-pointer hover:opacity-90 transition-opacity"
            style="
              width: 395px;
              height: 30px;
              border-radius: 9999px;
              border: 1px solid #EAECF0;
              background: #C7C7CC;
              padding: 8px 10px 8px 8px;
              gap: 8px;
              box-sizing: border-box;
            "
          >
            <div class="flex items-center gap-2" style="gap: 8px;">
              <!-- Issues Badge -->
              <span
                class="rounded-full flex items-center justify-center flex-shrink-0"
                style="
                  width: 53px;
                  height: 22px;
                  border-radius: 9999px;
                  border: 1px solid #EAECF0;
                  background: #FFFFFF;
                  padding: 2px 12px;
                  font-family: 'Geist', sans-serif;
                  font-weight: 500;
                  font-size: 12px;
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
                style="
                  font-family: 'Geist', sans-serif;
                  font-weight: 500;
                  font-size: 12px;
                  line-height: 18px;
                  letter-spacing: -1%;
                  color: #344054;
                  white-space: nowrap;
                "
              >
                {{ issuesCount }} Speed issues detected. Optimization potential
                is high
              </span>
            </div>
            <svg
              class="w-5 h-5 flex-shrink-0"
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

        <!-- Varnish Optimisation Results Button -->
        <div class="mt-6 flex justify-center">
          <button
            @click="viewOptimizationResults"
            class="relative overflow-hidden transition-all hover:opacity-90"
            style="
              width: 395px;
              height: 43px;
              border-radius: 6px;
              background: #182230;
              border: none;
              font-family: 'Geist', sans-serif;
              font-weight: 600;
              font-style: SemiBold;
              font-size: 16px;
              line-height: 24px;
              letter-spacing: 0%;
              color: #FFFFFF;
              box-sizing: border-box;
            "
          >
            <!-- Gradient Overlay -->
            <span
              class="absolute inset-0 rounded-lg pointer-events-none"
              style="
                background: linear-gradient(177.61deg, rgba(255, 255, 255, 0) 2%, rgba(255, 255, 255, 0.12) 98.17%);
              "
            ></span>
            <span class="relative z-10">Varnish Optimisation Results</span>
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
})

const route = useRoute()

// Sample data (replace with actual API data)
const overallScore = ref(42)
const issuesCount = ref(8)

const metrics = ref([
  {
    name: 'First Contentful Paint',
    value: '1.4 s',
    comparison: '100% Compared to Standard',
  },
  {
    name: 'First Contentful Paint',
    value: '1.4 s',
    comparison: '100% Compared to Standard',
  },
  {
    name: 'First Contentful Paint',
    value: '1.4 s',
    comparison: '100% Compared to Standard',
  },
  {
    name: 'First Contentful Paint',
    value: '1.4 s',
    comparison: '100% Compared to Standard',
  },
])

// Calculate circumference for circular progress
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

// View optimization results
const viewOptimizationResults = () => {
  // Navigate to optimization results page or show modal
  // For now, just log
  console.log('View optimization results for:', route.query.url)
  // You can navigate to a detailed results page here
}

// Animate score on mount
onMounted(() => {
  // Animate score from 0 to actual value
  let currentScore = 0
  const targetScore = overallScore.value
  const interval = setInterval(() => {
    currentScore += 2
    if (currentScore >= targetScore) {
      currentScore = targetScore
      clearInterval(interval)
    }
    overallScore.value = currentScore
  }, 30)
})
</script>


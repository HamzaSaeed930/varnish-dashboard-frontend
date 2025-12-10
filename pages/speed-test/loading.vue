<template>
  <div
    class="min-h-screen flex items-center justify-center relative overflow-hidden transition-opacity duration-500"
    style="background: #0C1E35 !important; opacity: 1;"
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
    <div 
      class="text-center relative z-10 transition-all duration-500"
      :style="{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(10px)' }"
    >
      <!-- Loading Animation -->
      <div class="mb-8 flex justify-center">
        <div class="relative w-24 h-24">
          <!-- Circular loading dots -->
          <div
            v-for="(dot, index) in 12"
            :key="index"
            class="absolute rounded-full transition-all duration-300"
            :style="getDotStyle(index)"
          ></div>
        </div>
      </div>

      <!-- Loading Text -->
      <h2
        class="mb-2 animate-pulse"
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
      </h2>
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
  </div>
</template>

<script setup>
// Page metadata
useHead({
  title: 'Running Performance Tests - Varnish',
  bodyAttrs: {
    style: 'background-color: #0C1E35 !important;',
  },
})

const route = useRoute()

// Reactive state for animation
const currentDot = ref(0)
const isVisible = ref(false)
let animationInterval = null

// Fetch performance data and redirect to results
onMounted(async () => {
  // Show loading screen with fade-in
  setTimeout(() => {
    isVisible.value = true
  }, 50)

  // Animate dots
  animationInterval = setInterval(() => {
    currentDot.value = (currentDot.value + 1) % 12
  }, 120)

  const url = route.query.url
  
  if (!url) {
    // If no URL, redirect back to index
    navigateTo('/speed-test')
    return
  }

  // Minimum display time to ensure loading screen is visible
  const startTime = Date.now()
  const minDisplayTime = 2000 // 2 seconds minimum

  try {
    // Fetch performance data using the composable
    const { getPerformanceData } = usePerformanceApi()
    const result = await getPerformanceData(decodeURIComponent(String(url)), 'backend')

    // Calculate remaining time to meet minimum display time
    const elapsedTime = Date.now() - startTime
    const remainingTime = Math.max(0, minDisplayTime - elapsedTime)

    // Wait for remaining time if needed, then navigate
    await new Promise(resolve => setTimeout(resolve, remainingTime))

    // Navigate to results page with data
    navigateTo({
      path: '/speed-test/results',
      query: { 
        url,
        // Pass data via query (or use sessionStorage/localStorage for larger data)
        data: result.success ? JSON.stringify(result.data) : null,
      },
    })
  } catch (error) {
    console.error('Error fetching performance data:', error)
    
    // Ensure minimum display time even on error
    const elapsedTime = Date.now() - startTime
    const remainingTime = Math.max(0, minDisplayTime - elapsedTime)
    await new Promise(resolve => setTimeout(resolve, remainingTime))
    
    // On error, still navigate but results page will show error or use fallback
    navigateTo({
      path: '/speed-test/results',
      query: { url, error: 'Failed to fetch performance data' },
    })
  }
})

// Cleanup on unmount
onUnmounted(() => {
  if (animationInterval) {
    clearInterval(animationInterval)
  }
})

// Calculate dot positions for circular loader
const getDotStyle = (index) => {
  const angle = (index * 30 - 90) * (Math.PI / 180) // 30 degrees per dot
  const radius = 35
  const x = Math.cos(angle) * radius
  const y = Math.sin(angle) * radius

  // Bright dots based on current animation position (4-5 dots bright at a time)
  const isBright = currentDot.value === index || 
                   (currentDot.value + 1) % 12 === index ||
                   (currentDot.value + 2) % 12 === index ||
                   (currentDot.value + 3) % 12 === index ||
                   (currentDot.value + 4) % 12 === index

  // Calculate opacity for smooth fade effect
  let opacity = 0.2
  if (isBright) {
    if (currentDot.value === index) {
      opacity = 1
    } else if ((currentDot.value + 1) % 12 === index) {
      opacity = 0.8
    } else if ((currentDot.value + 2) % 12 === index) {
      opacity = 0.6
    } else if ((currentDot.value + 3) % 12 === index) {
      opacity = 0.4
    } else {
      opacity = 0.3
    }
  }

  return {
    width: '8px',
    height: '8px',
    left: `calc(50% + ${x}px - 4px)`,
    top: `calc(50% + ${y}px - 4px)`,
    background: isBright ? '#ffffff' : '#6b7280',
    opacity: opacity,
    boxShadow: isBright && currentDot.value === index ? '0 0 8px rgba(255, 255, 255, 0.8)' : 'none',
    transition: 'all 0.3s ease',
  }
}
</script>

<style scoped>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>


<template>
  <div
    class="min-h-screen flex items-center justify-center"
    style="
      background: #0C1E35;
      background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0);
      background-size: 40px 40px;
    "
  >
    <div class="text-center">
      <!-- Loading Animation -->
      <div class="mb-8 flex justify-center">
        <div class="relative w-20 h-20">
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
        class="mb-2"
        style="
          font-family: 'Geist', sans-serif;
          font-weight: 600;
          font-size: 32px;
          line-height: 40px;
          color: #ffffff;
        "
      >
        Running Performance Tests
      </h2>
      <p
        style="
          font-family: 'Geist', sans-serif;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #9ca3af;
        "
      >
        Analyzing your website performance. This may take a few moments.
      </p>
    </div>
  </div>
</template>

<script setup>
// Page metadata
useHead({
  title: 'Running Performance Tests - Varnish',
})

const route = useRoute()

// Reactive state for animation
const currentDot = ref(0)
let animationInterval = null

// Simulate loading and redirect to results
onMounted(() => {
  // Animate dots
  animationInterval = setInterval(() => {
    currentDot.value = (currentDot.value + 1) % 12
  }, 150)

  // Simulate API call delay (3-5 seconds)
  const delay = 3000 + Math.random() * 2000

  setTimeout(() => {
    const url = route.query.url
    navigateTo({
      path: '/speed-test/results',
      query: { url },
    })
  }, delay)
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
  const radius = 30
  const x = Math.cos(angle) * radius
  const y = Math.sin(angle) * radius

  // Bright dots based on current animation position (3-4 dots bright at a time)
  const isBright = currentDot.value === index || 
                   (currentDot.value + 1) % 12 === index ||
                   (currentDot.value + 2) % 12 === index ||
                   (currentDot.value + 3) % 12 === index

  return {
    width: '6px',
    height: '6px',
    left: `calc(50% + ${x}px - 3px)`,
    top: `calc(50% + ${y}px - 3px)`,
    background: isBright ? '#ffffff' : '#6b7280',
    opacity: isBright ? '1' : '0.3',
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


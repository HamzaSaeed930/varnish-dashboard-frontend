<template>
  <div
    class="min-h-screen flex items-center justify-center relative overflow-hidden"
    style="background: #0C1E35;"
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
    <div class="text-center relative z-10">
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


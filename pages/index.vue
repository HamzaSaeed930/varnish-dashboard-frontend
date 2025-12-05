<template>
  <div></div>
</template>

<script setup>
// Page metadata
useHead({
  title: 'Varnish Dashboard - Home',
  meta: [
    { name: 'description', content: 'Varnish Dashboard - Management System' }
  ]
})

// Redirect to speed-test page on load
onMounted(() => {
  navigateTo('/speed-test')
})
</script>
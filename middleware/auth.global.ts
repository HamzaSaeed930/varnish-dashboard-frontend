/**
 * Global authentication middleware - UI only (no backend integration)
 * Simple cookie-based route protection
 */
export default defineNuxtRouteMiddleware((to, from) => {
  // Public pages that don't require authentication
  const publicPages = ['/', '/login', '/forgot-password', '/signup']
  const isPublicPage = publicPages.includes(to.path) || to.path.startsWith('/speed-test')

  // Simple check: just see if auth token exists in cookie
  const tokenCookie = useCookie('admin_auth_token')
  const isAuthenticated = !!tokenCookie.value

  // If trying to access dashboard without auth token, redirect to login
  if (to.path.startsWith('/dashboard') && !isAuthenticated) {
    return navigateTo('/login')
  }

  // If authenticated (has token) and trying to access login page, redirect to dashboard
  if (isAuthenticated && to.path === '/login') {
    return navigateTo('/dashboard')
  }

  // Allow all other routes - no permission checks, just basic auth check
})


// Mock composable for UI-only development
export interface User {
  id: string
  email: string
  name: string
  isSuperAdmin: boolean
  permissions: {
    countries: boolean
    visaProducts: boolean
    nationalities: boolean
    embassies: boolean
    coupons: boolean
    additionalInfo: boolean
    customers: boolean
    applications: boolean
    finances: boolean
  }
}

export const useAuthApi = () => {
  const getCurrentUser = (): User | null => {
    // UI only - get user from cookie
    const userCookie = useCookie<any>('admin_user_info')
    return userCookie.value || null
  }

  const isAuthenticated = (): boolean => {
    // UI only - check cookie
    const tokenCookie = useCookie('admin_auth_token')
    return !!tokenCookie.value
  }

  const logout = async () => {
    // UI only - clear cookies
    const tokenCookie = useCookie('admin_auth_token')
    const userCookie = useCookie('admin_user_info')
    tokenCookie.value = null
    userCookie.value = null
    await navigateTo('/login')
  }

  const getAdminProfile = async () => {
    // UI only - return mock user
    return getCurrentUser()
  }

  return {
    getCurrentUser,
    isAuthenticated,
    logout,
    getAdminProfile,
  }
}


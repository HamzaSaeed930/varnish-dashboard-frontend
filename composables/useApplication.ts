// Mock composable for UI-only development
export const useApplication = () => {
  const getAllApplications = async () => {
    // Mock data
    return []
  }

  const getApplicationSummary = async () => {
    // Mock data
    return {
      total: 0,
      active: 0,
      pending: 0,
      approved: 0,
      rejected: 0,
    }
  }

  const getApplication = async (id: string) => {
    // Mock data
    return { success: false, data: null }
  }

  const getApplicationPayment = async (id: string) => {
    // Mock data
    return { success: false, data: null }
  }

  const getApplicationTravelers = async (id: string) => {
    // Mock data
    return { success: false, data: [] }
  }

  const requestResubmission = async (id: string) => {
    // Mock
    return { success: true }
  }

  const updateApplicationStatus = async (id: string, status: string) => {
    // Mock
    return { success: true }
  }

  return {
    getAllApplications,
    getApplicationSummary,
    getApplication,
    getApplicationPayment,
    getApplicationTravelers,
    requestResubmission,
    updateApplicationStatus,
  }
}


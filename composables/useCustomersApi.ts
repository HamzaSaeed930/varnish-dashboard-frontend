// Mock composable for UI-only development
export const useCustomersApi = () => {
  const getAllCustomers = async () => {
    // Mock data
    return []
  }

  const getCustomerSummary = async () => {
    // Mock data
    return {
      totalCustomers: 0,
      activeCustomers: 0,
      inactiveCustomers: 0,
      suspendedCustomers: 0,
      totalApplications: 0,
    }
  }

  const getCustomerById = async (id: string) => {
    // Mock data
    return { success: false, data: null }
  }

  const getCustomerBilling = async (id: string) => {
    // Mock data
    return { success: false, data: null }
  }

  const getCustomerApplications = async (id: string) => {
    // Mock data
    return { success: false, data: [] }
  }

  const createCustomer = async (data: any) => {
    // Mock
    return { success: true, data: { id: '1', ...data } }
  }

  return {
    getAllCustomers,
    getCustomerSummary,
    getCustomerById,
    getCustomerBilling,
    getCustomerApplications,
    createCustomer,
  }
}


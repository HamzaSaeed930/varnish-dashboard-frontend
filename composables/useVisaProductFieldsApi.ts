// Mock composable for UI-only development
export const useVisaProductFieldsApi = () => {
  const getVisaProductFieldsByVisaProduct = async (visaProductId: string) => {
    // Mock data
    return { success: false, data: [] }
  }

  const getResponsesByApplication = async (applicationId: string) => {
    // Mock data
    return { success: false, data: [] }
  }

  const getFieldsWithResponsesByApplication = async (applicationId: string) => {
    // Mock data
    return { success: false, data: [] }
  }

  return {
    getVisaProductFieldsByVisaProduct,
    getResponsesByApplication,
    getFieldsWithResponsesByApplication,
  }
}


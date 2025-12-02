// Mock composable for UI-only development
export const useVisaProductsApi = () => {
  const getAllVisaProducts = async () => {
    return { success: true, data: [] }
  }

  const getVisaProductById = async (id: string) => {
    return { success: false, data: null }
  }

  const createVisaProduct = async (data: any) => {
    return { success: true, data: { id: '1', ...data } }
  }

  const updateVisaProduct = async (id: string, data: any) => {
    return { success: true, data: { id, ...data } }
  }

  const deleteVisaProduct = async (id: string) => {
    return { success: true }
  }

  return {
    getAllVisaProducts,
    getVisaProductById,
    createVisaProduct,
    updateVisaProduct,
    deleteVisaProduct,
  }
}


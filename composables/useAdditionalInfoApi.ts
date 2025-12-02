// Mock composable for UI-only development
export const useAdditionalInfoApi = () => {
  const getAllAdditionalInfo = async () => {
    return { success: true, data: [] }
  }

  const getAdditionalInfoById = async (id: string) => {
    return { success: false, data: null }
  }

  const createAdditionalInfo = async (data: any) => {
    return { success: true, data: { id: '1', ...data } }
  }

  const updateAdditionalInfo = async (id: string, data: any) => {
    return { success: true, data: { id, ...data } }
  }

  const deleteAdditionalInfo = async (id: string) => {
    return { success: true }
  }

  return {
    getAllAdditionalInfo,
    getAdditionalInfoById,
    createAdditionalInfo,
    updateAdditionalInfo,
    deleteAdditionalInfo,
  }
}


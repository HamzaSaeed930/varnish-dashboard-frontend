// Mock composable for UI-only development
export const useEmbassiesApi = () => {
  const getAllEmbassies = async () => {
    return { success: true, data: [] }
  }

  const getEmbassyById = async (id: string) => {
    return { success: false, data: null }
  }

  const createEmbassy = async (data: any) => {
    return { success: true, data: { id: '1', ...data } }
  }

  const updateEmbassy = async (id: string, data: any) => {
    return { success: true, data: { id, ...data } }
  }

  const deleteEmbassy = async (id: string) => {
    return { success: true }
  }

  return {
    getAllEmbassies,
    getEmbassyById,
    createEmbassy,
    updateEmbassy,
    deleteEmbassy,
  }
}


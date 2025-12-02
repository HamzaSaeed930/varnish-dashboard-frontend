// Mock composable for UI-only development
export const useNationalitiesApi = () => {
  const getAllNationalities = async () => {
    return { success: true, data: [] }
  }

  const getNationalityById = async (id: string) => {
    return { success: false, data: null }
  }

  const createNationality = async (data: any) => {
    return { success: true, data: { id: '1', ...data } }
  }

  const updateNationality = async (id: string, data: any) => {
    return { success: true, data: { id, ...data } }
  }

  const deleteNationality = async (id: string) => {
    return { success: true }
  }

  return {
    getAllNationalities,
    getNationalityById,
    createNationality,
    updateNationality,
    deleteNationality,
  }
}


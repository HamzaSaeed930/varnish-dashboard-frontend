// Mock composable for UI-only development
export const useCountriesApi = () => {
  const getCountries = async () => {
    // Mock data
    return { success: true, data: [] }
  }

  const getCountryById = async (id: string) => {
    // Mock data
    return { success: false, data: null }
  }

  const createCountry = async (data: any) => {
    // Mock
    return { success: true, data: { id: '1', ...data } }
  }

  const updateCountry = async (id: string, data: any) => {
    // Mock
    return { success: true, data: { id, ...data } }
  }

  const deleteCountry = async (id: string) => {
    // Mock
    return { success: true }
  }

  return {
    getCountries,
    getCountryById,
    createCountry,
    updateCountry,
    deleteCountry,
  }
}


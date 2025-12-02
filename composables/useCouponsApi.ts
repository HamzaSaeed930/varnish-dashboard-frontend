// Mock composable for UI-only development
export const useCouponsApi = () => {
  const getAllCoupons = async () => {
    return { success: true, data: [] }
  }

  const getCouponById = async (id: string) => {
    return { success: false, data: null }
  }

  const createCoupon = async (data: any) => {
    return { success: true, data: { id: '1', ...data } }
  }

  const updateCoupon = async (id: string, data: any) => {
    return { success: true, data: { id, ...data } }
  }

  const deleteCoupon = async (id: string) => {
    return { success: true }
  }

  return {
    getAllCoupons,
    getCouponById,
    createCoupon,
    updateCoupon,
    deleteCoupon,
  }
}


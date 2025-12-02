// Mock composable for UI-only development
export interface Payment {
  id: number
  amount: number
  status: string
  createdAt: string
  [key: string]: any
}

export const usePaymentsApi = () => {
  const getAllPayments = async (): Promise<Payment[]> => {
    // Mock data
    return []
  }

  const calculateAnalytics = (payments: Payment[]) => {
    return {
      totalRevenue: 0,
      pendingPayments: 0,
      completedPayments: 0,
      failedPayments: 0,
    }
  }

  return {
    getAllPayments,
    calculateAnalytics,
  }
}


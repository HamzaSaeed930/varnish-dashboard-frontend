// Mock composable for UI-only development
export const usePermissions = () => {
  const hasPermission = (permission: string): boolean => {
    // UI only - return true for all permissions
    return true;
  };

  const isSuperAdmin = (): boolean => {
    // UI only - return true
    return true;
  };

  const getUserPermissions = () => {
    // UI only - return mock permissions
    return {
      countries: true,
      visaProducts: true,
      nationalities: true,
      embassies: true,
      coupons: true,
      additionalInfo: true,
      customers: true,
      applications: true,
      finances: true,
    };
  };

  return {
    hasPermission,
    isSuperAdmin,
    getUserPermissions,
  };
};


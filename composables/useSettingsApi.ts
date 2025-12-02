// Mock composable for UI-only development
import { ref } from 'vue';

export interface Setting {
  id: string;
  key: string;
  value: string | number;
  description?: string;
}

export function useSettingsApi() {
  const mockSettings = ref<Setting[]>([]); // Mock data

  const getAllSettings = async () => {
    return { success: true, data: mockSettings.value };
  };

  const updateSetting = async (key: string, value: string | number) => {
    return { success: true, data: { key, value } };
  };

  return {
    getAllSettings,
    updateSetting,
  };
}


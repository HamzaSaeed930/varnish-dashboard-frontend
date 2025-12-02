// Mock composable for UI-only development
import { ref } from 'vue';

export interface Guide {
  id: string;
  title: string;
  content?: string;
  category?: string;
  createdAt?: string;
}

export function useGuidesApi() {
  const mockGuides = ref<Guide[]>([]); // Mock data

  const getAllGuides = async () => {
    return { success: true, data: mockGuides.value };
  };

  const getGuideById = async (id: string) => {
    return { success: true, data: { id, title: 'Mock Guide', content: 'Mock content' } };
  };

  const createGuide = async (guideData: any) => {
    return { success: true, data: { id: 'new-guide-' + Date.now(), ...guideData } };
  };

  const updateGuide = async (id: string, guideData: any) => {
    return { success: true, data: { id, ...guideData } };
  };

  const deleteGuide = async (id: string) => {
    return { success: true, message: 'Guide deleted successfully' };
  };

  const getCategories = async () => {
    return { success: true, data: [] };
  };

  return {
    getAllGuides,
    getGuideById,
    createGuide,
    updateGuide,
    deleteGuide,
    getCategories,
  };
}


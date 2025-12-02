// Mock composable for UI-only development
import { ref } from 'vue';

export interface User {
  id: string;
  name: string;
  email: string;
  role?: string;
  status?: string;
  createdAt?: string;
}

export function useUsersApi() {
  const mockUsers = ref<User[]>([]); // Mock data

  const getAllUsers = async () => {
    return { success: true, data: mockUsers.value };
  };

  const getUserById = async (id: string) => {
    return { success: true, data: { id, name: 'Mock User', email: 'mock@example.com' } };
  };

  const createUser = async (userData: any) => {
    return { success: true, data: { id: 'new-user-' + Date.now(), ...userData } };
  };

  const updateUser = async (id: string, userData: any) => {
    return { success: true, data: { id, ...userData } };
  };

  const deleteUser = async (id: string) => {
    return { success: true, message: 'User deleted successfully' };
  };

  return {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  };
}


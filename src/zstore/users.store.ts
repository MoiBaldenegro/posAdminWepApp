import { create } from 'zustand';
import { updateUsersService } from '../services/users.services';

interface state {
  isLoading: boolean;
  errors: boolean;
  message: string | null;
  updateUser: (id: string, body: {}) => Promise<void>;
}

export const useUsersStore = create<state>((set) => {
  return {
    isLoading: false,
    errors: false,
    message: null,
    updateUser: async (id, body) => {
      set({ isLoading: true });
      try {
        const res = await updateUsersService(id, body);
        set({ isLoading: false });
      } catch (error) {
        set({ isLoading: false, errors: true, message: 'No se completo' });
      }
    },
  };
});

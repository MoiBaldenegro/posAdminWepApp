import { getTotalBillsService } from '@/services/processOperationServices';
import { create } from 'zustand';

interface state {
  isLoading: boolean;
  errors: null | boolean;
  message: string | null;
  totalBills: [];
  getTotalBills: () => Promise<any[]>;
}

export const useProcessOperationsStore = create<state>((set) => {
  return {
    isLoading: false,
    errors: null,
    message: null,
    totalBills: [],
    getTotalBills: async () => {
      set({ isLoading: true });
      try {
        const res = await getTotalBillsService();
        console.log(res);
        const totalBills = res.data;
        set({ isLoading: false, totalBills: totalBills });
      } catch (error) {
        set({ isLoading: false, errors: true, message: 'No se completo' });
      }
    },
  };
});

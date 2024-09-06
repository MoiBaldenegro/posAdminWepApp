import { create } from 'zustand';
import { getOperatingPeriodsService } from '@/services/operatingPeriods';

interface state {
  isLoading: boolean;
  erros: boolean;
  message: string;
  operatingPeriods: any[];
  getOperatingPeriods: () => void;
}

export const useOperatingPeriodStore = create<state>((set) => ({
  isLoading: false,
  erros: false,
  message: '',
  operatingPeriods: [],
  getOperatingPeriods: async () => {
    set((state) => ({ ...state, isLoading: true }));
    try {
      const response = await getOperatingPeriodsService();
      const operatingPeriods = response.data;
      if (!operatingPeriods) {
        set({
          isLoading: false,
          erros: true,
          message: 'Ocurrio un error al recuperar los periodos de operacion',
        });
        return;
      }
      if (operatingPeriods) {
        set({
          isLoading: false,
          erros: false,
          operatingPeriods,
        });
      }
      return operatingPeriods;
    } catch (error) {
      set({
        isLoading: false,
        erros: true,
        message: 'Ocurrio un error al recuperar los periodos de operacion',
      });
      return error;
    }
  },
}));

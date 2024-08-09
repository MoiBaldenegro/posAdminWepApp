import {
  createSubcategoryService,
  getSubcategoriesService,
} from '@/services/subCategories';
import { create } from 'zustand';

interface state {
  isLoading: boolean;
  errors: null | boolean;
  message: string | null;
  createSubcategory: (body: {}) => Promise<void>;
  subCategoriesArray: [];
  getSubcategories: () => Promise<void>;
}

export const useSubcategoriesStore = create<state>((set) => {
  return {
    isLoading: false,
    errors: null,
    message: null,
    createSubcategory: async (body: {}) => {
      set({ isLoading: true });
      try {
        const res = await createSubcategoryService(body);
        set({ isLoading: false });
      } catch (error) {
        set({ isLoading: false, errors: true, message: 'No se completo' });
      }
    },
    subCategoriesArray: [],
    getSubcategories: async () => {
      set({ isLoading: true });
      try {
        const res = await getSubcategoriesService();
        const subcategoriesArray = res.data;
        set({ isLoading: false, subCategoriesArray: subcategoriesArray });
      } catch (error) {
        set({ isLoading: false, errors: true, message: 'No se completo' });
      }
    },
  };
});

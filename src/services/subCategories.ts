import axios from '../configs/axios';

export const createSubcategoryService = async (body: {}) => {
  const response = await axios.post(`/subcategory-one`, body);
  return response;
};

/// haremos un servicio para traer todas las subcategorias
export const getSubcategoriesService = async () => {
  const response = await axios(`/subcategory-one`);
  return response;
};

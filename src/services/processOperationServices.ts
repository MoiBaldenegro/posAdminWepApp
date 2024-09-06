import { BILLS_PATH, TOTAL_CURRENT_SELLS_PATH } from '@/lib/path.lib';
import axios from '../configs/axios';

export const getTotalBillsService = async () => {
  const response = await axios(`${BILLS_PATH}/current`);
  return response;
};

export const getTotalCurrentSellsService = async () => {
  const response = await axios(`${TOTAL_CURRENT_SELLS_PATH}`);
  return response;
};

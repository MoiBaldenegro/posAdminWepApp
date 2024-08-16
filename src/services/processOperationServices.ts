import { CLOUSURES_OF_OPERATIONS_PATH, PERIOD_PATH } from '@/lib/path.lib';
import axios from '../configs/axios';

export const getTotalBillsService = async () => {
  const response = await axios.post(
    `${CLOUSURES_OF_OPERATIONS_PATH}${PERIOD_PATH}`,
    {},
  );
  return response;
};

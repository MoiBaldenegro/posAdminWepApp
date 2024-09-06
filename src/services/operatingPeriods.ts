import axios from '@/configs/axios';
import { OPERATING_PERIODS_PATH } from '@/lib/path.lib';

export const getOperatingPeriodsService = async () => {
  const response = await axios(`${OPERATING_PERIODS_PATH}`);
  return response;
};

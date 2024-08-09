import axios from '../configs/axios';
import { USERS_PATH } from '../lib/path.lib';

export const updateUsersService = async (id: string, body: {}) => {
  const response = await axios.put(`${USERS_PATH}/apt/${id}`, body);
  return response;
};

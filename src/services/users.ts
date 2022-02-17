import axios from "axios";

export const getUsers = (params: string) => {
  return axios.get(`?${params}`);
};

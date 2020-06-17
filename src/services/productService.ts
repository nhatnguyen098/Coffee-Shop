import { API_URL } from "../constants/mockApiUrl";
import axiosService from "../commons/axiosService";
const endpoint = "products";
export const getProListAPI = () => {
  return axiosService.get(`${API_URL}/${endpoint}`);
};
export const getProDetailAPI = (id:number) => {
  return axiosService.get(`${API_URL}/${endpoint}/${id}`);
}

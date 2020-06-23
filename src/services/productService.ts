import { API_URL } from "../constants/mockApiUrl";
import axiosService from "../commons/axiosService";
import fireBase from "../constants/configFireBase";
const endpoint = "products";
export const getProListAPI = () => {
  return axiosService.get(`${API_URL}/${endpoint}`);
};
export const getProDetailAPI = (id:number) => {
  return axiosService.get(`${API_URL}/${endpoint}/${id}`);
}
export const postProductAPI = (data:any) => {
  return fireBase.firestore().collection("coffee").add(data);
}

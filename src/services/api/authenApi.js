import axiosService from "../axios/axiosService";

export const loginApi = (data) => {
  return axiosService.post("/authen/login", data);
};
export const registerApi = (data) => {
  return axiosService.post("/authen/register", data);
};

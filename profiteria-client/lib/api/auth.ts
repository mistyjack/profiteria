import API from "./API";
import { ChangePasswordData, LoginData, SignupData } from "@types";

export const signup = (data: SignupData) => {
  return API.post("/auth/register", data);
};

export const login = (data: LoginData) => {
  return API.post("/auth/login", data);
};

export const changePassword = (data: ChangePasswordData) => {
  return API.post("/auth/changePassword", data);
};

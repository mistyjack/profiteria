import API from "./API";
import { LoginData, SignupData } from "@types";

export const signup = (data: SignupData) => {
  return API.post("/auth/register", data);
};

export const login = (data: LoginData) => {
  return API.post("/auth/login", data);
};

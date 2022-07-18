export interface SignupData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface ChangePasswordData {
  token: string;
  new_password: string;
}

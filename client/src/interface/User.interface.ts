export interface IUserLogin {
  userName: string;
  message: string;
  token: string;
  isAdmin: number;
}

export interface ILoginPayload {
  userName: string;
  password: string;
}

export interface IRegisterPayload {
  userName:string;
  firstName:string;
  lastName:string;
  password:string;
}

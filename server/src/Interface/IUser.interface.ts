export interface IUser {
  userName: string;
  message: string;
  token: string;
  isAdmin: number;
}

export interface Register {
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface IUserDB {
  id?: number;
  user_name: string;
  first_name: string;
  last_name: string;

  isAdmin: string;
}

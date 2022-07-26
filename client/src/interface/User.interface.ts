
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

export interface IRegiterPayload {
    user_name: string;
    first_name: string;
    last_name: string;
    password: string;
    isAdmin?: string;
}


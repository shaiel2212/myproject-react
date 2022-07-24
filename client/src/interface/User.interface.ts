
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
    
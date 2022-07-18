export type InputChange = React.ChangeEvent<HTMLInputElement>;
import rootReducer from "../redux/reducers/index";

export type FormEvent = React.FormEvent<HTMLFormElement>;

export type RootStore = ReturnType<typeof rootReducer>;

export interface LoginType {
    account: string;
    password: string;
}

export interface RegisterType {
    name: string;
    account: string;
    password: string;
}

export interface IUser extends LoginType {
    _id: string;
    name: string;
    account: string;
    password: string;
    avatar: string;
    role: string;
    type: string;
    createdAt: string;
    updatedAt: string;
}

export type IAuth = {
    token: string;
    user: IUser;
};

export type IAlert = {
    loading?: boolean;
    success?: string | string[];
    error?: string | string[];
};

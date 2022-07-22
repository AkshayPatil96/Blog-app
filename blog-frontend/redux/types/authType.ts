import { IUser } from "../../utils/TypeScript";

export const AUTH = "AUTH";

export type IAuth = {
    access_token?: any;
    token?: string;
    user?: IUser;
};

export type IAUTHTYPE = {
    type: typeof AUTH;
    payload: IAuth;
};

import { IUser } from "../../utils/TypeScript";

export const AUTH = "AUTH";

export type IAuth = {
    token?: string;
    user?: IUser;
};

export type IAUTHTYPE = {
    type: typeof AUTH;
    payload: IAuth;
};

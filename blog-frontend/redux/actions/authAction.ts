import { Dispatch } from "react";
import { AUTH, IAUTHTYPE } from "../types/authType";
import { ALERT, IAlertType } from "../types/alertTypes";

import { LoginType, RegisterType } from "../../utils/TypeScript";
import { postAPI } from "../../utils/FetchData";

export const login =
    (userLogin: LoginType) =>
    async (dispatch: Dispatch<IAUTHTYPE | IAlertType>) => {
        try {
            dispatch({ type: ALERT, payload: { loading: true } });
            const res = await postAPI("login", userLogin);
            const data = res.data;

            console.log("res: ", res.data);
            dispatch({
                type: AUTH,
                payload: {
                    token: data.access_token,
                    user: data.user,
                },
            });
            dispatch({ type: ALERT, payload: { success: "Login Success!" } });
        } catch (error: any) {
            dispatch({
                type: ALERT,
                payload: { error: error.response.data.msg },
            });
        }
    };

export const register =
    (userRegister: RegisterType) =>
    async (dispatch: Dispatch<IAUTHTYPE | IAlertType>) => {
        try {
            dispatch({ type: ALERT, payload: { loading: true } });
            const res = await postAPI("register", userRegister);
            const data = res.data;

            console.log("res: ", res.data);
            dispatch({
                type: AUTH,
                payload: {
                    token: data.access_token,
                    user: data.user,
                },
            });
            dispatch({ type: ALERT, payload: { success: "Login Success!" } });
        } catch (error: any) {
            dispatch({
                type: ALERT,
                payload: { error: error.response.data.msg },
            });
        }
    };

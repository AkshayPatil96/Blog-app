import { Dispatch } from "react";
import { AUTH, IAUTHTYPE } from "../types/authType";
import { ALERT, IAlertType } from "../types/alertTypes";

import { LoginType, IRegisterType } from "../../utils/TypeScript";
import { getAPI } from "../../utils/FetchData";
import { validRegister } from "../../utils/Valid";
import axios from "axios";

export const login =
  (userLogin: LoginType) =>
  async (dispatch: Dispatch<IAUTHTYPE | IAlertType>) => {
    try {
      dispatch({ type: ALERT, payload: { loading: true } });
      const res = await axios.post("/auth/login", userLogin, {
        withCredentials: true,
      });

      const data = await res.data;

      dispatch({
        type: AUTH,
        payload: {
          token: data.access_token,
          user: data.user,
        },
      });

      dispatch({ type: ALERT, payload: { success: res.data.msg } });

      localStorage.setItem("logged", "true");
    } catch (error: any) {
      dispatch({
        type: ALERT,
        payload: { error: error.response.data.msg },
      });
    }
  };

export const register =
  (userRegister: IRegisterType) =>
  async (dispatch: Dispatch<IAUTHTYPE | IAlertType>) => {
    const check = validRegister(userRegister);

    if (check.errLength > 0)
      return dispatch({ type: ALERT, payload: { error: check.errMsg } });

    try {
      dispatch({ type: ALERT, payload: { loading: true } });

      const res = await axios.post("/auth/register", userRegister, {
        withCredentials: true,
      });

      const data = await res.data;

      localStorage.setItem("logged", "true");

      dispatch({
        type: AUTH,
        payload: {
          token: data.access_token,
          user: data.user,
        },
      });

      dispatch({
        type: ALERT,
        payload: { success: res.data.msg },
      });
    } catch (error: any) {
      dispatch({
        type: ALERT,
        payload: { error: error.response.data.msg },
      });
    }
  };

export const refreshToken =
  () => async (dispatch: Dispatch<IAUTHTYPE | IAlertType>) => {
    const logged = localStorage.getItem("logged");
    if (logged !== "true") return;

    try {
      dispatch({ type: ALERT, payload: { loading: true } });

      const res = await getAPI("refresh_token");

      const data = await res.data;

      dispatch({ type: AUTH, payload: res.data });

      dispatch({ type: ALERT, payload: {} });
    } catch (error: any) {
      dispatch({
        type: ALERT,
        payload: { error: error.response.data.msg },
      });
    }
  };

export const logout =
  () => async (dispatch: Dispatch<IAUTHTYPE | IAlertType>) => {
    try {
      dispatch({
        type: ALERT,
        payload: { loading: true },
      });

      const res = await getAPI("logout");

      dispatch({
        type: AUTH,
        payload: res.data,
      });

      localStorage.removeItem("logged");

      dispatch({
        type: ALERT,
        payload: { success: res.data.msg },
      });
    } catch (error: any) {
      dispatch({
        type: ALERT,
        payload: { error: error.response.data.msg },
      });
    }
  };

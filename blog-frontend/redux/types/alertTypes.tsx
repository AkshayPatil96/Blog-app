import { IAlert } from "../../utils/TypeScript";

export const ALERT = "ALERT";

export type IAlertType = {
    type: typeof ALERT;
    payload: IAlert;
};

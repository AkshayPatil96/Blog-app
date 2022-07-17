import { AUTH, IAuth, IAUTHTYPE } from "../types/authType";

const authReducer = (state: IAuth = {}, action: IAUTHTYPE): IAuth => {
    switch (action.type) {
        case AUTH:
            return action.payload;
        default:
            return state;
    }
};

export default authReducer;

import { IRegisterType } from "./TypeScript";

export const validRegister = (userRegister: IRegisterType) => {
    const { name, account, password } = userRegister;
    const errors: string[] = [];

    if (!name) {
        errors.push("Please add your name.");
    } else if (name.length > 20) {
        errors.push("Your name is up to 20 characters long.");
    } else if (name.length < 3) {
        errors.push("Your name must be at least 3 characters long.");
    }

    if (!account) {
        errors.push("Please add your email.");
    } else if ( !validateEmail(account)) {
        errors.push("Email format is incorrect.");
    }

    if (password.length < 6) {
        errors.push("Password must be at least 6 chars.");
    }

    return {
        errMsg: errors,
        errLength: errors.length,
    };
};

// export function validPhone(phone: string) {
//     const re = /^[+]/g;
//     return re.test(phone);
// }

export function validateEmail(email: string) {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/authAction";
import { FormEvent, InputChange, RegisterType } from "../../utils/TypeScript";

const RegisterForm = () => {
    const initState = { name: "", account: "", password: "" };
    const [registerUser, setRegisterUser] = useState<RegisterType>(initState);
    const { name, account, password } = registerUser;

    const [typePass, setTypePass] = useState(false);

    const dispatch = useDispatch();

    const handleChange = (e: InputChange) => {
        const { name, value } = e.target;
        setRegisterUser({
            ...registerUser,
            [name]: value,
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // dispatch(register(registerUser));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    autoComplete="off"
                    value={name}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="account" className="form-label">
                    Email / Phone Number
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="account"
                    name="account"
                    autoComplete="off"
                    value={account}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group mb-3">
                <label htmlFor="password" className="form-label">
                    Password
                </label>
                <div className="pass" style={{ position: "relative" }}>
                    <input
                        type={typePass ? "text" : "password"}
                        className="form-control"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                    <small
                        onClick={() => {
                            setTypePass(!typePass);
                        }}
                        style={{
                            cursor: "pointer",
                            position: "absolute",
                            top: "50%",
                            right: "5px",
                            transform: "translateY(-50%)",
                            opacity: 0.5,
                        }}
                    >
                        {typePass ? "Hide" : "Show"}
                    </small>
                </div>
            </div>

            <button
                type="submit"
                className="btn btn-dark w-100"
                disabled={account && password ? false : true}
            >
                Register
            </button>
        </form>
    );
};

export default RegisterForm;

import Link from "next/link";
import React from "react";
import LoginPass from "../components/auth/LoginPass";
import styles from "../styles/auth.module.css";

const login = () => {
    return (
        <>
            <div className={styles.auth_page}>
                <div className={styles.auth_box}>
                    <h3 className="text-uppercase text-center mb-4">Login</h3>
                    <LoginPass />
                    <small
                        className="row my-2 text-primary"
                    >
                        <span className="col-5">
                            <Link href={"/forgot_password"} className="col-6">
                                Forget password
                            </Link>
                        </span>
                        <p>
                            {"You don't have an account?"}
                            <Link href={"/register"} className="text-danger">
                                Register Now
                            </Link>
                        </p>
                    </small>
                </div>
            </div>
        </>
    );
};

export default login;

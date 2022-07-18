import Link from "next/link";
import React from "react";
import RegisterForm from "../components/auth/RegisterForm";
import styles from "../styles/auth.module.css";

const register = () => {
    return (
        <>
            <div className={styles.auth_page}>
                <div className={styles.auth_box}>
                    <h3 className="text-uppercase text-center mb-4">
                        Register
                    </h3>
                    <RegisterForm />
                    <small className="row my-2 text-primary">
                        <p>
                            {"Already have an account?"}
                            <Link href={"/login"} className="text-danger">
                                Login
                            </Link>
                        </p>
                    </small>
                </div>
            </div>
        </>
    );
};

export default register;

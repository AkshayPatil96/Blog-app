import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styles from "../styles/auth.module.css";
import { RootStore } from "../utils/TypeScript";
import { useDispatch, useSelector } from "react-redux";
import RegisterForm from "../components/auth/RegisterForm";
import { refreshToken } from "../redux/actions/authAction";

const register = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const { auth } = useSelector((state: RootStore) => state);

  useEffect(() => {
    dispatch(refreshToken());
    if (auth.access_token) router.push("/");
  }, [auth, router, dispatch]);

  return (
    <>
      <div className={styles.auth_page}>
        <div className={styles.auth_box}>
          <h3 className="text-uppercase text-center mb-4">Register</h3>

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

import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styles from "../styles/auth.module.css";
import { RootStore } from "../utils/TypeScript";
import LoginPass from "../components/auth/LoginPass";
import { useDispatch, useSelector } from "react-redux";
import { refreshToken } from "../redux/actions/authAction";

const login = () => {
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
          <h3 className="text-uppercase text-center mb-4">Login</h3>

          <LoginPass />

          <small className="row my-2 text-primary">
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

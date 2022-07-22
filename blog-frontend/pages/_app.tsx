import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import { Provider, useDispatch } from "react-redux";
import { store, wrapper } from "../redux/store";
import Navbar from "../components/Navbar";
import Alert from "../components/alert/Alert";
import "../interceptors/axios";
import { useEffect } from "react";
import { refreshToken } from "../redux/actions/authAction";

function MyApp({ Component, pageProps }: AppProps) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(refreshToken());
    }, [dispatch]);

    return (
        <>
            <div className="container">
                <Provider store={store}>
                    <Alert />
                    <Navbar />
                    <Component {...pageProps} />
                </Provider>
            </div>
        </>
    );
}

export default wrapper.withRedux(MyApp);

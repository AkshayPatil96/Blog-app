import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { store, wrapper } from "../redux/store";
import Navbar from "../components/Navbar";
import Alert from "../components/alert/Alert";
import "../interceptors/axios";

function MyApp({ Component, pageProps }: AppProps) {
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

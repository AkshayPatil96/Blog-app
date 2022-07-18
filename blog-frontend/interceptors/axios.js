import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/";

// let refresh = false;

// const authaxios = axios.create({
//     baseURL: "http://localhost:8080/",
//     headers: {
//       Authorization:`Bearer `
//     }
// });

// axios.interceptors.response.use(
//     (resp) => resp,
//     async (error) => {
//         if (error.response.status === 401 && !refresh) {
//             refresh = true;

//             const response = await axios.post(
//                 "auth/refresh-token",
//                 {},
//                 { withCredentials: true }
//             );
//             const data = await response.data;

//             console.log("data: ", data);
//             if (response.status === 200) {
//                 axios.defaults.headers.common[
//                     "Authorization"
//                 ] = `Bearer ${data.accessToken}`;

//                 return axios(error.config);
//             }
//         }
//         refresh = false;
//         return error;
//     }
// );

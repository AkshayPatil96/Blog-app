import axios from "axios";

export const postAPI = async (url: string, post: object, token?: string) => {
    const res = await axios.post(`http://localhost:8000/auth/${url}`, post, {
        headers: { Authorization: token },
    });

    return res;
};

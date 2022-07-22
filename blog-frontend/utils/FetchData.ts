import axios from "axios";

export const postAPI = async (url: string, post: object, token?: string) => {
    const res = await axios.post(`/auth/${url}`, post, {
        headers: { Authorization: token },
        withCredentials: true,
    });

    return res;
};

export const getAPI = async (url: string, token?: string) => {
    const res = await axios.get(`/auth/${url}`, {
        headers: { Authorization: token },
        withCredentials: true,
    });

    return res;
};

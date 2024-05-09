import instance from "../helpers/AxiosInterceptor";

export const create = (request) => {
    return instance.post(`/discount/create`, JSON.stringify(request));
};

export const list = () => {
    return instance.get(`/discount/getAll`);
};


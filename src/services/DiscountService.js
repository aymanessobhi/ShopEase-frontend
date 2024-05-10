import instance from "../helpers/AxiosInterceptor";

export const create = (request) => {
    return instance.post(`/discount/create`, JSON.stringify(request));
};

export const list = () => {
    return instance.get(`/discount/getAll`);
};

export const find = (id) => {
    return instance.get(`/discount/find/${id}`);
};

export const deleteDis = (id) => {
    return instance.delete(`/discount/delete/${id}`);
}

export const update = (request) => {
    return instance.put(`/discount/update`, JSON.stringify(request));
};





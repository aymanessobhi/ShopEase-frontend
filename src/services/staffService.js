import instance from "../helpers/AxiosInterceptor";
import config from "../helpers/config";


export const staff = (query) => {
    const retrievedToken =  localStorage.getItem('authUser');
    const parse =  JSON.parse(retrievedToken);
    let headers = {
        "Content-type": "application/json",
        'Authorization': `Bearer ${parse.accessToken}`,

    };
    return instance.post(`${config.baseURL}/staff/create`, JSON.stringify(query), {
        headers: headers,
    });
};
export const deleteSt = (id) => {
    const retrievedToken =  localStorage.getItem('authUser');
    const parse =  JSON.parse(retrievedToken);
    let headers = {
        "Content-type": "application/json",
        'Authorization': `Bearer ${parse.accessToken}`,

    };
    return instance.delete(`${config.baseURL}/staff/deleteSt/${id}`,{
        headers: headers,
    });
};


export const staffFetch = () => {
    const retrievedToken =  localStorage.getItem('authUser');
    const parse =  JSON.parse(retrievedToken);;
    let headers = {
        "Content-type": "application/json",
        'Authorization': `Bearer ${parse.accessToken}`,

    };
    return instance.get(`${config.baseURL}/staff/getAll`, {
        headers: headers,
    });
};
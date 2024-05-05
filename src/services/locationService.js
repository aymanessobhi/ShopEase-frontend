import instance from "../helpers/AxiosInterceptor";
import config from "../helpers/config";


export const location = (query) => {
    const retrievedToken =  localStorage.getItem('authUser');
    const parse =  JSON.parse(retrievedToken);;
    let headers = {
        "Content-type": "application/json",
        'Authorization': `Bearer ${parse.accessToken}`,

    };
    return instance.post(`${config.baseURL}/location/create`, JSON.stringify(query), {
        headers: headers,
    });
};

export const locationFetch = () => {
    const retrievedToken =  localStorage.getItem('authUser');
    const parse =  JSON.parse(retrievedToken);;
    let headers = {
        "Content-type": "application/json",
        'Authorization': `Bearer ${parse.accessToken}`,

    };
    return instance.get(`${config.baseURL}/location/getAll`, {
        headers: headers,
    });
};
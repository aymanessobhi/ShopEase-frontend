import instance from "../helpers/AxiosInterceptor";
import config from "../helpers/config";


export const country = (query) => {
    const retrievedToken =  localStorage.getItem('authUser');
    const parse =  JSON.parse(retrievedToken);;
    let headers = {
        "Content-type": "application/json",
        'Authorization': `Bearer ${parse.accessToken}`,

    };
    return instance.post(`${config.baseURL}/country/create`, JSON.stringify(query), {
        headers: headers,
    });
};

export const countryFetch = () => {
    const retrievedToken =  localStorage.getItem('authUser');
    const parse =  JSON.parse(retrievedToken);;
    let headers = {
        "Content-type": "application/json",
        'Authorization': `Bearer ${parse.accessToken}`,

    };
    return instance.get(`${config.baseURL}/country/getAll`, {
        headers: headers,
    });
};
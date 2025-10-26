import axios from "axios";
import {BASE_URL} from "./apiEndpoints.js";

const AxiosConfig = axios.create({

    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
})


//we do not have to pass token for these endpoints just like we did in the backend
const excludeEndpoints = ["/login", "/register","/health","/status","/activate"];

//request interceptor to add token to headers

AxiosConfig.interceptors.request.use(

    (config) => {


  const tokenshouldNotBePassed = excludeEndpoints.some(
      endpoint => { return  config.url?.includes(endpoint)}
  );

    if (!tokenshouldNotBePassed) {

       const accessToken = localStorage.getItem("token");

       if (accessToken) {
           config.headers.Authorization = `Bearer ${accessToken}`;
       }
    }

    return config;
},(error) => {

    return Promise.reject(error);

})



//response intercepro
AxiosConfig.interceptors.response.use((response) => {



    return response;
},(error) => {
    if (error.response && error.response.status === 401) {
        window.location.href = "/login";
    }else if (error.response && error.response.status === 500) {

        console.error("Server Error....Pliz Try Again Later");

    }else if(error.code === "ECONNABORTED"){
        console.error("Request timeout ..PLIZ TRY AGAIN LATER")
    }

    return Promise.reject(error);
})

export default AxiosConfig;
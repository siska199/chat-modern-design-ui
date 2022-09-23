import axios from "axios";
console.log("test masuk: ", process.env.REACT_APP_BASEURL)
const API = axios.create({
    baseURL : process.env.REACT_APP_BASEURL
})

export const setAuthToken = (token:string)=>{
    if(token){
        API.defaults.headers.common["Authorization"] = `Barear ${token}`
    }else{
        delete API.defaults.headers.common["Authorization"]
    }
}

export default API
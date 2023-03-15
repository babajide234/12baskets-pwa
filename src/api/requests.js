import axios from "axios";
const url ='https://api.12basketsfoods.com/';

const instance = axios.create({
    baseURL:url
});

export const postrequest = async (url,data)=>{
    return instance.post(url,data)
}
export const getrequest = async (url,data)=>{
    return instance.get(url,data)
}
export const upload = async (url,data)=>{
    return instance.get(url, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
}
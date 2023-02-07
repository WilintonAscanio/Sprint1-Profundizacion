import axios from "axios";

const URL_MSG = "https://back-sprint1-production.up.railway.app/mensajes";
const URL_USERS = "https://back-sprint1-production.up.railway.app/usuarios";



export const getALLMessages = async () => {
    try {
        const { data } = await axios.get(URL_MSG);
        console.log(data[0].mensajes[0].message);
        return data;



    } catch (error) {
        console.log(error);
        return error

    }

}
export const newMessagge = async (message) => {
    try {
        const response = await axios.post(URL_MSG, message);
        return response;

    } catch (error) {
        console.log(error.response.data);
        return error

    }

}
export const getAllUsers = async () => {
    try {
        const { data } = await axios.get(URL_USERS);
        return data

    } catch (error) {
        console.log(error);
        return error

    }
}
export const newUser = async (user) => {
    try {
        const response = await axios.post(URL_USERS, user);
        return response

    } catch (error) {
        console.log(error);
        return error

    }
}
export const getUser = async (id) => {
    try {
        const { data } = await axios.get(`${URL_USERS}/${id}`);
        return data;

    } catch (error) {
        console.log(error);
        return error;

    }
}
export const editData = async (id, data) => {
    try {
        const urlEdit = `${URL_USERS}/${id}`;
        const response = await axios.patch(urlEdit, data)
    } catch (error) {
        console.log(error);
        return error
        
    }
}
// export const getMessage = async (id) => {
//     try {
//         const { data } = await axios.get(`${URL_MSG}/${id}`)
//         console.log(data);
        
//     } catch (error) {
//         console.log(error);
//         return error
        
//     }
  
// }

// console.log(data.results.idUser1);

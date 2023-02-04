import axios from "axios";

const URL_MSG = "https://back-sprint1-production.up.railway.app/mensajes";
const URL_USERS = "https://back-sprint1-production.up.railway.app/usuarios";



export const getALLMessages = async () => {
    try {
        const { data } = await axios.get(URL_MSG);
        return data;



    } catch (error) {
        console.log(error);
        return error

    }

}
export const newMessagge = async (messagge) => {
    try {
        const response = await axios.post(URL_MSG, messagge);
        console.log(response);
        return response;

    } catch (error) {
        console.log(error);
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


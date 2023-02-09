import axios from "axios";

const URL_MSG = "https://back-sprint1-production.up.railway.app/mensajes";
const URL_USERS = "https://back-sprint1-production.up.railway.app/usuarios";



// export const getALLMessages = async (idUser) => {
//     try {
//         const urlConversationsSender = `${URL_MSG}/?idUser1=${idUser}`;
//         const urlConversationsReceptor = `${URL_MSG}/?idUser2=${idUser}`;
//         const responseSender = await axios.get(urlConversationsSender);
//         const responseReceptor = await axios.get(urlConversationsReceptor);
//         return [...responseSender.data, ...responseReceptor.data];



//     } catch (error) {
//         console.log(error);
//         return error

//     }

// }
export const getMessages = async () => {
    try {
        const { data } = await axios.get(URL_MSG);
        return data


    } catch (error) {
        console.log(error);
        return error

    }

}
export const newMessagge = async (id, data) => {
    try {
        const response = await axios.patch(`${URL_MSG}/${id}`, data);
        console.log(response);
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
export const createConversation = async(message) =>{
    try {
        const response = await axios.post(URL_MSG, message);
        console.log(response);
        return response
        
    } catch (error) {
    console.log(error);
    return error;
        
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

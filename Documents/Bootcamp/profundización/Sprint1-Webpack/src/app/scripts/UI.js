import icono from "../assets/images/icono.png";
import aside__image from "../assets/images/hombre.png"
import icon_lupa from "../assets/images/search.svg"
import profile2 from "../assets/images/hombre2.png"
import icon_enviado from "../assets/images/doble.svg"
import visto from "../assets/images/visto__azul.png"
import icon_emoji from "../assets/images/smile.svg"
import icon_paper from "../assets/images/paperclip.svg"
import icon_mic from "../assets/images/mic.svg"
import icon_back from "../assets/images/icon-back.png"
import icon_camera from "../assets/images/camara.png"
import icon_edit from "../assets/images/editar.png"
import icon_confirm from "../assets/images/cheque.png"
import icon_back_msg from "../assets/images/x.png"
import icon_send from "../assets/images/send.svg"
import { getALLMessages, getAllUsers, getMessage, getUser, newMessagge, newUser } from "./services.js";




// DOM elements

const iconoImg = document.getElementById('nav__img');
export const navSignIn = document.getElementById('nav--right--SignIn');
export const formSignIn = document.getElementById('form_login');
export const formSignUp = document.getElementById('signUp');
export const welcome__figure = document.getElementById('welcome__figure');
export const signUp__button = document.getElementById('signUp__button');
export const welcome = document.getElementById('welcome');
export const createAccount = document.getElementById('createAccount');
export const user_chat = document.getElementById('user_chat');
export const header = document.getElementById('header');
export const login__celular = document.getElementById('login__celular');
export const login_password = document.getElementById('login_password');
export const allSignUp = document.querySelectorAll('.form');
export const signUp__name = document.getElementById('signUp__name');
export const signUp__cel = document.getElementById('signUp__cel');
export const signUp__password = document.getElementById('signUp__password');
export const signUp__url = document.getElementById('signUp__url');
export const signUp__phrase = document.getElementById('signUp__phrase');
export const asideImage = document.getElementById('aside__image');
export const lupa = document.getElementById('lupa');
export const profile2__img = document.getElementById('profile2__img');
export const visto_azul = document.getElementById('visto_azul')
export const enviado = document.getElementById('enviado');
export const img__user2 = document.getElementById('img__user2');
export const search = document.getElementById('search');
export const emoji = document.getElementById('emoji');
export const paperclip = document.getElementById('paperclip');
export const mic = document.getElementById('mic');
export const back = document.getElementById('back');
export const camera = document.getElementById('camera');
export const edit = document.getElementById('edit');
export const aside__profile = document.getElementById('aside__profile');
export const aside = document.getElementById('aside');
export const confirm = document.getElementById('confirm');
export const edit_img = document.getElementById('edit_img');
export const edit_url = document.getElementById('edit_url');
export const section_img = document.getElementById('section_img');
export const section_name = document.getElementById('section_name');
export const back__msg = document.getElementById('back_msg');
export const lupa_msg = document.getElementById('lupa_msg');
export const cancel_search = document.getElementById('cancel_search');
export const send_msg = document.getElementById('send_msg');
export const sendMSg = document.getElementById('sendMSg');
export const send_msg_date = document.getElementById('send_msg_date');
export const search_msg = document.getElementById('search_msg');
export const input_search_msg = document.getElementById('input_search_msg');
export const iconTop = document.getElementById('iconTop').href = icono;
export const nameUser = document.getElementById('nameUser');
export const edit__img = document.getElementById('edit__img');
export const edit__name = document.getElementById('edit__name');
export const chat_container = document.getElementById('chat_container');
export const main = document.getElementById('main');
export const main_left = document.getElementById('main_left');
export const main_right = document.getElementById('main_right');
export const footer__input = document.getElementById('footer__input');
export const form__footer = document.getElementById('form__footer');
export const last_message = document.getElementById('last_message');
export const messages_user = document.getElementById('messages_user')
export const mainChat = document.getElementById('mainChat')
export const chatWith = document.getElementById('chatWith')
export const searchMsg__with = document.getElementById('searchMsg__with')
export const searchMsg = document.querySelector(".searchMsg__with");





//Asignación de imagenes

iconoImg.src = icono;
welcome__figure.src = icono;
asideImage.src = aside__image;
lupa.src = icon_lupa;
profile2__img.src = profile2;
visto_azul.src = visto
enviado.src = icon_enviado;
img__user2.src = profile2;
search.src = icon_lupa
emoji.src = icon_emoji;
paperclip.src = icon_paper
mic.src = icon_mic;
back.src = icon_back;
camera.src = icon_camera;
edit.src = icon_edit;
confirm.src = icon_confirm;
edit_img.src = icon_confirm
back__msg.src = icon_back_msg;
lupa_msg.src = icon_lupa;
cancel_search.src = icon_back_msg;
send_msg.src = icon_enviado;
send_msg_date.src = icon_enviado;
// sendMSg.src = icon_send;


const date = new Date()

export const addNewUser = async () => {

    const user = {
        nombre: signUp__name.value,
        id: signUp__cel.value,
        contraseña: signUp__password.value,
        imagen: signUp__url.value,
        online: false,
        frase: signUp__phrase.value,
        fecha: ""

    }
    await newUser(user);
}


export const renderAllUsers = async (id) => {
    chat_container.innerHTML = ''
    const response = await getAllUsers();
    response.forEach(element => {
        if (element.id != id) {
            chat_container.innerHTML += `
        <div class="chat__container"  data-id=${element.id}>
                    <figure class="chat__figure" data-id=${element.id}>
                        <img alt="profile__chat"src="${element.imagen}" class="chat__img" id="profile2__img" data-id=${element.id}>
                    </figure>
                    <div class="chat__infoUser" data-id=${element.id}>
                        <p class="chat__name" data-id=${element.id}>${element.nombre} <span data-id=${element.id}>Viernes</span></p>
                        <p class="chat__message">
                            <img alt="enviado" src="${icon_enviado}" id="enviado"> <img alt="visto__azul" src="${visto}" class="hidden" id="visto_azul">
                            <span data-id=${element.id} id="last_message"></span>
                        </p>

                    </div>
                </div>
        
        `

        }

    })


}
export const renderChat = async (id1, id2) => {
    main_left.innerHTML = ''
    main_right.innerHTML = ''
    main.innerHTML = '';

    const response = await getALLMessages();

    response.forEach(element => {
        if (element.idUser1 === id1 && element.idUSer2 === id2) {
            element.mensajes.forEach(msg => {
                if (msg.sendBy === id1) {

                    main.innerHTML += `
                        <section class="main__right message">
                            <div class="main__messages2">
                                <p>${msg.message}</p>
                                <p class="message__date">09:28 am</p>
                            </div>
                        </section>
                           
                        `

                }
                if (msg.sendBy === id2) {
                    main.innerHTML += `
                        <section class="main__left message">
                                <div class="main__messages">
                                    <p>${msg.message}</p>
                                    <p class="message__date">09:27 am</p>
                                </div>
                            </section>
                           
                        `

                }

            })

        }

    })


}
export const sendMessage = async (id1, id2) => {

    const send = {
        idUser1: id1,
        idUSer2: id2,
        mensajes: [
            {
                sendBy: id1,
                date: date.getDate(),
                hour: date.getHours(),
                message: footer__input.value,
                visto: false
            }
        ]

    }
    await newMessagge(send);

}
export const renderUser = async (id) => {
    messages_user.innerHTML = ''
    const response = await getUser(id);
    messages_user.innerHTML = `
        <img src="${response.imagen}"id="img__user2" class="img_user2">
        <p id="messages__user2__name">${response.nombre} <span>EN LINEA</span></p>
        `


}

// export const renderSearchMessage = async (id, searchTerm ="") => {
//     let listMsg = []
//     let datos = await getALLMessages()
//     datos.forEach(element => {
//         listMsg.push(element.mensajes)
//     });
//     console.log(listMsg);
//     const messages = searchTerm ? datos.filter((msg) => msg.mensajes.toLowerCase().includes(searchTerm.toLowerCase())):datos;
//     console.log(datos);
    

 
// }
// renderSearchMessage()


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
import { getALLMessages, getAllUsers, getUser, newMessagge, newUser } from "./services.js";




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
export const send_msg_date = document.getElementById('send_msg_date');
export const search_msg = document.getElementById('search_msg');
export const input_search_msg = document.getElementById('input_search_msg');
export const iconTop = document.getElementById('iconTop').href = icono;





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

export const addNewUser = async () => {
    
    const user = {
        nombre: signUp__name.value,
        celular: signUp__cel.value,
        contraseña: signUp__password.value,
        imagen: signUp__url.value,
        online: false,
        frase: signUp__phrase.value,
        fecha: ""

    }
    console.log(user);
    await newUser(user);
}


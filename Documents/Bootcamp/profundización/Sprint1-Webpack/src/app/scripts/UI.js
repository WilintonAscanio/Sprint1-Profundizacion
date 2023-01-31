import icono from "../assets/images/icono.png";
import fondo from "../assets/images/fondo.jpg";




// DOM elements

const iconoImg = document.getElementById('nav__img');
const body = document.getElementById('body');
export const navSignIn = document.getElementById('nav--right--SignIn');
export const formSignIn = document.getElementById('form_login');
export const formSignUp = document.getElementById('signUp');
export const welcome__figure = document.getElementById('welcome__figure');
export const signUp__button = document.getElementById('signUp__button');
export const welcome = document.getElementById('welcome');
export const createAccount = document.getElementById('createAccount');
export const user_chat = document.getElementById('user_chat');
export const header = document.getElementById('header');






export const renderImages = () => {
    iconoImg.src = icono;
     
}



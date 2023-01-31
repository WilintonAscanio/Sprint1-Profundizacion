import Swal from 'sweetalert2';
import '../styles/style.scss';
import './UI'
import { navSignIn, formSignIn, welcome__figure, signUp__button, welcome, createAccount, user_chat, header, formSignUp } from "./UI";

const showFormSingIn = () => {
    navSignIn.addEventListener('click', () => {
        formSignIn.classList.remove('invisible')
        welcome__figure.classList.add('invisible')


    })
}
showFormSingIn();

signUp__button.addEventListener('click', (e) => {
    console.log('hola');
    e.preventDefault();
    welcome.classList.add('hidden');
    createAccount.classList.remove('hidden');
    signUp__button.classList.add('hidden')



})
const user_view = () => {
    navSignIn.addEventListener('click', () => {
        showFormSingIn();
        createAccount.classList.add('hidden');
        welcome.classList.remove('hidden')
        signUp__button.classList.remove('hidden')

    })

}
user_view();

formSignIn.addEventListener('submit', (e) => {
    e.preventDefault();
    Swal.fire({
        title :"Bienvenido de vuelta",
        text: "Credenciales correctas",
        icon: 'success'

    })  
    user_chat.classList.remove('hidden');
    welcome.classList.add('hidden');
    header.classList.add('hidden')

})

formSignUp.addEventListener('submit', (e) => {
    e.preventDefault();
    Swal.fire({
        title:"Bienvenido a What's Up",
        text: 'Esperamos que disfrutes',
        icon: 'success'
    })
    createAccount.classList.add('hidden');
    user_chat.classList.remove('hidden');
    header.classList.add('hidden');
  
})
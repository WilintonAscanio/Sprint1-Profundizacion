import Swal from 'sweetalert2';
import '../styles/style.scss';
import './UI'
import { navSignIn, formSignIn, welcome__figure, signUp__button, welcome, createAccount, user_chat, header, formSignUp, login__celular, login_password, allSignUp, signUp__name, signUp__cel, signUp__password, signUp__url, signUp__phrase } from "./UI";

//Expresiones regulares

var expRegNombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
// var expRegContra = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/


const showFormSingIn = () => {
    navSignIn.addEventListener('click', () => {
        formSignIn.classList.remove('invisible')
        welcome__figure.classList.add('invisible')


    })
}
showFormSingIn();

signUp__button.addEventListener('click', (e) => {
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

const validation = (cel, contra) => {
    if (cel.value.length < 11) {
        Swal.fire({
            icon: 'info',
            text: 'El número ingresado es incorrecto'
        })

    }
    else if (cel.value[0] != 3) {
        Swal.fire({
            icon: 'info',
            text: 'El número ingresado es inválido '
        })

    }
    else if (contra.value.length < 1) {
        Swal.fire({
            icon: 'info',
            text: 'La contraseña ingresada es incorrecta'
        })
    }
}

formSignIn.addEventListener('submit', (e) => {
    e.preventDefault();

    if (login__celular.value.length === 10 && login_password.value) {

        Swal.fire({
            title: "Bienvenido de vuelta",
            text: "Credenciales correctas",
            icon: 'success'

        })
        user_chat.classList.remove('hidden');
        welcome.classList.add('hidden');
        header.classList.add('hidden')
    }
    else {
        Swal.fire({
            icon: 'info',
            text: 'Compruebe sus credenciales'
        })
        validation(login__celular, login_password)
    }
})

formSignUp.addEventListener('submit', (e) => {
    e.preventDefault();
    if (signUp__name.value && signUp__cel.value && signUp__password.value && signUp__url.value) {
        Swal.fire({
            title: "Bienvenido a What's Up",
            text: 'Esperamos que disfrutes',
            icon: 'success'
        })
        createAccount.classList.add('hidden');
        user_chat.classList.remove('hidden');
        header.classList.add('hidden');
    }
    else if (!expRegNombre.exec(signUp__name.value)) {
        Swal.fire({
            icon: 'info',
            text: 'Este campo solo admite letras'
        })
    }
    // else if (!expRegContra.exec(signUp__password.value)){
    //     Swal.fire({
    //         icon: 'info',
    //         text: 'Contraseña demasiado insegura'
    //     })
    // }
    else {
        Swal.fire({
            icon: 'info',
            text: 'Por favor rellene todos los campos obligatorios'
        })
        validation(signUp__cel, signUp__password)
    }
})

import Swal from 'sweetalert2';
import '../styles/style.scss';
import { getAllUsers, getUser } from './services.js';
import './UI'
import { navSignIn, formSignIn, welcome__figure, signUp__button, welcome, createAccount, user_chat, header, formSignUp, login__celular, login_password, allSignUp, signUp__name, signUp__cel, signUp__password, signUp__url, signUp__phrase, asideImage, aside__profile, aside, back, edit_url, section_img, edit_img, confirm, section_name, edit, search, search_msg, lupa_msg, back__msg, input_search_msg, cancel_search, addNewUser } from "./UI";

//Expresiones regulares

var expRegNombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;


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


formSignIn.addEventListener('submit', async (e) => {
    e.preventDefault();
    const signId = login__celular.value;
    const signPassword = login_password.value;
    const response = await getAllUsers();
    response.forEach(element => {
        console.log(element.nombre);
        if (signId && signPassword && element.celular === signId && element.contraseña === signPassword) {
            Swal.fire({
                title: "Bienvenido de vuelta",
                text: "Credenciales correctas",
                icon: 'success'
            });
            user_chat.classList.remove('hidden');
            welcome.classList.add('hidden');
            header.classList.add('hidden')

        }
        else {
            Swal.fire({
                icon: 'info',
                text: 'Compruebe sus credenciales'
            })
        }
    })
});

formSignUp.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!signUp__name.value && !signUp__cel.value && !signUp__password.value && !signUp__url.value) {
        Swal.fire({
            icon: 'info',
            text: 'Por favor rellene todos los campos obligatorios'
        })

    }
    else if (!expRegNombre.exec(signUp__name.value)) {
        Swal.fire({
            icon: 'info',
            text: 'Este campo solo admite letras'
        })
    }
    else if (signUp__name.value.length < 3) {
        Swal.fire({
            icon: 'info',
            text: 'Nombre muy corto'
        })
    }
    else if (signUp__cel.value.length > 10 || signUp__cel.value.length != 10) {
        Swal.fire({
            icon: 'info',
            text: 'El número ingresado es incorrecto'
        })

    }
    else if (signUp__cel.value[0] != 3) {
        Swal.fire({
            icon: 'info',
            text: 'El número ingresado es inválido '
        })

    }
    else if (signUp__password.value.length < 5) {
        Swal.fire({
            icon: 'info',
            text: 'La contraseña ingresada es demasiado corta'
        })
    }
    else if (!signUp__url.value) {
        Swal.fire({
            icon: 'info',
            text: 'Ingrese un enlace válido'
        })
    }



    else {
        Swal.fire({
            title: "Bienvenido a What's Up",
            text: 'Esperamos que disfrutes',
            icon: 'success'
        })
        createAccount.classList.add('hidden');
        user_chat.classList.remove('hidden');
        header.classList.add('hidden');
        await addNewUser();

    }

})

asideImage.addEventListener('click', () => {
    aside.classList.add('hidden');
    aside__profile.classList.remove('hidden');

})
back.addEventListener('click', () => {
    aside__profile.classList.add('hidden');
    aside.classList.remove('hidden');
})

edit_url.addEventListener('click', () => {
    section_img.classList.remove('hidden');
})

edit_img.addEventListener('click', () => {
    Swal.fire({
        icon: 'success',
        text: 'Imagen editada exitosamente'
    })
    section_img.classList.add('hidden')
})
edit.addEventListener('click', () => {
    section_name.classList.remove('hidden');
})
confirm.addEventListener('click', () => {
    Swal.fire({
        icon: 'success',
        text: 'Nombre editado exitosamente'
    })
    section_name.classList.add('hidden');
})
search.addEventListener('click', () => {
    search_msg.classList.remove('hidden');
})
back__msg.addEventListener('click', () => {
    search_msg.classList.add('hidden');
})
input_search_msg.addEventListener('keyup', () => {
    if (input_search_msg.value) {
        cancel_search.classList.remove('invisible');
    }
    else {
        cancel_search.classList.add('invisible');
    }
})
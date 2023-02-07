import Swal from 'sweetalert2';
import '../styles/style.scss';
import { editData, editImg, getALLMessages, getAllUsers, getUser } from './services.js';
import './UI'
import { navSignIn, formSignIn, welcome__figure, signUp__button, welcome, createAccount, user_chat, header, formSignUp, login__celular, login_password, allSignUp, signUp__name, signUp__cel, signUp__password, signUp__url, signUp__phrase, asideImage, aside__profile, aside, back, edit_url, section_img, edit_img, confirm, section_name, edit, search, search_msg, lupa_msg, back__msg, input_search_msg, cancel_search, addNewUser, nameUser, edit__img, edit__name, renderAllUsers, renderChat, footer__input, sendMessage, form__footer, chat_container, last_message, renderUser, mainChat, searchMsg__with, searchMsg } from "./UI.js";

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

let userId = 0;
let userId2 = 0;


formSignIn.addEventListener('submit', async (e) => {
    e.preventDefault();
    const signId = login__celular.value;
    const signPassword = login_password.value;
    const response = await getUser(signId);
    let celularValidate = false;
    let passwordValidate = false;
    if (signId && signId === response.id) {
        celularValidate = true;
    }
    if (signPassword && signPassword === response.contraseña) {
        passwordValidate = true;

    }

    if (celularValidate && passwordValidate) {
        Swal.fire({
            title: "Bienvenido de vuelta",
            text: "Credenciales correctas",
            icon: 'success'
        });
        userId = response.id;
        asideImage.src = response.imagen;
        nameUser.innerHTML = response.nombre;

        user_chat.classList.remove('hidden');
        welcome.classList.add('hidden');
        header.classList.add('hidden');
        await renderAllUsers(userId)
        const render = await getALLMessages()
        console.log(render);


    } else {
        Swal.fire({
            icon: 'info',
            text: 'Credenciales incorrectas'
        })

    }

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
        await addNewUser();
        await renderAllUsers(signUp__cel.value)
        const response = await getUser(signUp__cel.value);
        asideImage.src = response.imagen;
        nameUser.innerHTML = response.nombre;
        createAccount.classList.add('hidden');
        user_chat.classList.remove('hidden');
        header.classList.add('hidden');


    }

})

asideImage.addEventListener('click', async () => {
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

edit_img.addEventListener('click', async () => {
    const newImage = {
        imagen: edit__img.value
    }
    if (edit__img.value) {
        Swal.fire({
            icon: 'success',
            text: 'Imagen editada exitosamente'
        })
        const edit = await editData(userId, newImage);
        section_img.classList.add('hidden')
        const userDetail = await getUser(userId);
        asideImage.src = userDetail.imagen;

    }
    else {
        Swal.fire({
            icon: 'info',
            text: 'Ingrese un enlace válido'
        })
    }




})
edit.addEventListener('click', () => {
    section_name.classList.remove('hidden');
})
confirm.addEventListener('click', async () => {

    const newName = {
        nombre: edit__name.value
    }
    if (edit__name.value) {
        Swal.fire({
            icon: 'success',
            text: 'Nombre editado exitosamente'
        })
        const edit = await editData(userId, newName);
        section_name.classList.add('hidden')
        const userDetail = await getUser(userId);
        nameUser.innerHTML = userDetail.nombre;

    }
    else {
        Swal.fire({
            icon: 'info',
            text: 'Ingrese un nombre válido'
        })
    }
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
input_search_msg.addEventListener('click', () => {
    searchMsg__with.reset();
})
chat_container.addEventListener('click', async (e) => {
    userId2 = e.target.getAttribute('data-id');
    await renderUser(userId2);
    await renderChat(userId, userId2);
    const userDetail = await getUser(userId2);
    chatWith.innerHTML = `Mensajes con ${userDetail.nombre}`
})
form__footer.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (footer__input.value) {
        // last_message.innerHTML = footer__input.value;
        await sendMessage(userId, userId2);
        await renderChat(userId, userId2);
        
        form__footer.reset();



    }

})
searchMsg__with.addEventListener('submit', (e) => {
    e.preventDefault()
    let busqueda = input_search_msg.value
    searchMsg__with.reset()
  
})



// searchMsg.addEventListener("submit", async (event) => {
//     event.preventDefault();
//     const inputSearch = document.querySelector("#input_search_msg");
//     const searchTerm = inputSearch.value;
    // if (searchTerm) {
    //     getPokemons(URL_API, searchTerm);
    // }
    // else if (searchTerm == "") {
    //     getPokemons(URL_API);
    // }
// });
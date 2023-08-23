
/* Datos para logeo de la cuenta */
let userStore = 'marcelo.fernandez@outlook.com'
let passStore = 5678
let nameStore = 'Marcelo Fernandez'


const formLogin = document.getElementById('form')
console.log(formLogin);


const formVal = (e) => {
    e.preventDefault()
    console.log(e)
    console.log(formLogin.emailLogin.value)
    console.log(formLogin.passwordLogin.value)
    console.log(formLogin.userName.value)


    let user = formLogin.emailLogin.value
    let pass = formLogin.passwordLogin.value
    let name = formLogin.userName.value


    if (nameStore == name && userStore == user && passStore == pass) {
        alert('Bienvenido al Portal de KidsLands!');
        location.href = './cuenta.html'
    } else {
        var mensaje = document.createElement("span");
        mensaje.innerHTML = "Acceso no válido, datos erróneos";
        mensaje.style.color = "red";
        document.getElementById("form").appendChild(mensaje);
        document.getElementById("form").reset();

    }
}

formLogin.onsubmit = formVal



/* Avatar Aleatorio con API */

const image = document.getElementById('avatars');
const baseURL = "https://avatars.dicebear.com/api/bottts/";

let link = image.src;
const input = document.getElementById('inputusername');
const username = document.getElementById("username");

input.onchange = input.onkeyup = function () {
    const newURL = `${baseURL}${encodeURI(input.value)}${".svg"}`;
    image.src = newURL;
    username.textContent = input.value;
}
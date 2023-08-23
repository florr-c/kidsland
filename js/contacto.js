console.log('form contacto');

let contacto = []

function mensaje() {

    let nombre = document.getElementById('nombre');
    if (nombre.value === '' || nombre.value == null) {

        messages.push('Name is required')
    }
    let apellido = document.getElementById('apellido');
    if (apellido.value === '' || apellido.value == null) {

        messages.push('Apellido is required')
    }
    let email = document.getElementById('email');
    if (email.value === '' || email.value == null) {

        messages.push('Email is required')
    }

    let comentario = document.getElementById('comentario').value;
    contacto.push(nombre, apellido, email, comentario)

    const mensajes = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        comentario: comentario,
    }
    console.log(mensajes);
    contacto.push(mensajes);
    console.log(contacto);
    console.log('mensaje enviado');
    alert('El mensaje se envió correctamente, nuestro equipo se estará contactando con usted');
    location.reload();
}




 //jquery materialize 
$(document).ready(function(){
     $('.sidenav').sidenav();
   });

   //Muro-> Opcion postear
   
   const boton = document.getElementById('btn');
boton.addEventListener('click', () => { 
    let comments = document.getElementById('comment').value;
    if(comments = "" )
    document.getElementById('comment').value = '';
    const cont = document.getElementById('cont');
    const newComments = document.createElement('div');
    const chck = document.createElement('input');
    chck.type = 'checkbox';
    const heart = document.createElement('i');
    heart.classList.add('fa', 'fa-heart', 'heart');
    const trash = document.createElement('i');
    trash.classList.add('fa', 'fa-trash', 'trash');
    const contenedorElemento = document.createElement('p');
    let textNewComment = document.createTextNode(comments);
    contenedorElemento.appendChild(textNewComment);
    newComments.appendChild(chck);
    newComments.appendChild(heart);
    newComments.appendChild(trash);
    newComments.appendChild(contenedorElemento);
    cont.appendChild(newComments);

    heart.addEventListener('click', ()=> {
        heart.classList.toggle('red');
    })
    trash.addEventListener('click', ()=> {
        cont.removeChild(newComments);
    })
    chck.addEventListener('click', ()=> {
        contenedorElemento.classList.toggle('strike-out');
    })
}) 

// Muro -> Subir foto
function getPhoto() {
    let fotoUsuario = document.getElementById("photo").value;
    console.log(fotoUsuario);
}





// creamos un nuevo objeto con firebase
// utilizamos setcustomparametres , display popup, con eso le decimos  firebase que hagas el login con facebook en un popup
// ahora llamamos a firebase.auth , utilizamos singwithpopup, introducimos el provider y luego esa funcion retorna una promesa
// then para obtener el resultado y catch para los errores
// agregamos en firebase un dominio autorizado , 127.0.0.1 es el 200 ok

//Login con Facebook
function facebookLoginWithFirebase(){
    const provider = new firebase.auth.FacebookAuthProvider(); // creamos un nuevo objeto 

    provider.setCustomParameters({ // le decimos que haga un login con facebook y enlace un popup
        'display' : 'popup'
    });

    firebase.auth().signInWithPopup(provider)
        .then((result)=>{
            const usuario = result.user.displayName;
            console.log(result);
            console.log('usuario: ' + usuario)
            console.log("Login con facebook exitoso");

        })
        .catch((error)=>{
            console.log("Error de firebase > Código > "+error.code); //error.code nos mostrará el código de error para informarnos qué pasó
            console.log("Error de firebase > Mensaje > "+error.message); //error.message nos mostrará el mensaje de firebase del mismo error
        });
}

function googleLoginWithFirebase(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
        console.log(result);
       
     const usuario = firebase.auth().currentUser;
     console.log(usuario);
        const token =  result.credential.accessToken;
        const user = result.user.displayName;
        const fotouser = result.user.photoURL;
        console.log('usuario: ' + user + ' toke: ' + token + ' foto url: ' + fotouser);
        

    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = email.error;
        var credential = error.credential;

    })
  
}

// Registro de usuario
function registerWithFirebase() {
    const emailValue = email.value;
    const passwordValue = password.value;

    firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
    .then(() => {
        console.log("Usuario creado con éxito");
     })
    .catch((error) => {
        console.log("Error de firebase > Código > "+error.code);
        console.log("Error de firebase > Mensaje > "+error.message);
     });
}




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

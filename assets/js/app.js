
 //jquery materialize 
$(document).ready(function(){
     $('.sidenav').sidenav();
   });

  


// creamos un nuevo objeto con firebase
// utilizamos setcustomparametres , display popup, con eso le decimos  firebase que hagas el login con facebook en un popup
// ahora llamamos a firebase.auth , utilizamos singwithpopup, introducimos el provider y luego esa funcion retorna una promesa
// then para obtener el resultado y catch para los errores
// agregamos en firebase un dominio autorizado , 127.0.0.1 es el 200 ok

//Login con Facebook
// let usurio1;
// let img1;



function facebookLoginWithFirebase(){
    const provider = new firebase.auth.FacebookAuthProvider(); // creamos un nuevo objeto 

    provider.setCustomParameters({ // le decimos que haga un login con facebook y enlace un popup
        'display' : 'popup',
    });

    firebase.auth().signInWithPopup(provider)
        .then((result)=>{
            const usuario = result.user.displayName;
            location = '../../html/muro.html';
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
    //     console.log(result);
    location = '../../html/muro.html' //Url aqui
    //  const usuario = firebase.auth().currentUser;
    //  console.log(usuario);
        const token =  result.credential.accessToken;
        
       
        // location.href = '../../html/perfil.html';
        
        console.log('usuario: ' + user + ' toke: ' + token + ' foto url: ' + fotouser);
       
      

    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
   
        var credential = error.credential;

    })
  
}


//   function mostrarImgYNombre(nombre, img){
//        console.log(nombre);
//        console.log(img);
      
//   }


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

   


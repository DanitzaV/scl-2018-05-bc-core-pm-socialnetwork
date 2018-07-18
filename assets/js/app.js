
 //jquery materialize 
$(document).ready(function(){
     $('.sidenav').sidenav();
   });

   //Muro-> Opcion postear
   
   const boton = document.getElementById('btn');
boton.addEventListener('click', () => {
    let comments = document.getElementById('comment').value;
    document.getElementById('comment').value = '';
    const cont = document.getElementById('cont');
    const newComments = document.createElement('div');
    const chck = document.createElement('input');
    chck.type = 'checkbox';
    const heart = document.createElement('i');
    heart.classList.add('fa', 'fa-heart', 'heart');

    //const like = document.createElement('i');
    //like.classList.add('far fa-thumbs-up');

    const trash = document.createElement('i');
    trash.classList.add('fa', 'fa-trash', 'trash');
    const contenedorElemento = document.createElement('p');
    let textNewComment = document.createTextNode(comments);
    contenedorElemento.appendChild(textNewComment);
    newComments.appendChild(chck);
    //newComments.appendChild(like);
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

    /*like.addEventListener('click', ()=> {
     contadorLike();
    })*/

    chck.addEventListener('click', ()=> {
        contenedorElemento.classList.toggle('strike-out');
    })
}) 
//Muro-> Opcion subir foto

/*function getPhoto() {
photoUser = document.getElementById("photo").value;
console.log(photoUser)
}*/
function getPhoto() {
    var inputFile = document.getElementById('photo').value;
    console.log(inputFile);
    inputFile.addEventListener('change', printPhoto, false);
  }
  
  function printPhoto(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
      var img = document.getElementById('photoUser');
      img.src= event.target.result;
    }
    reader.readAsDataURL(file);
  }
  
  //window.addEventListener('load', init, false);

//Muro-> Guardar mensajes posteados y mostrarlos en pantalla al momento de cargar la página.

function sendPost(){
    const currentUser = firebase.auth().currentUser;
    const postTextArea = document.getElementById("comment").value;
    console.log(postTextArea);

    const newPostKey = firebase.database().ref().child('posts').push().key;

    firebase.database().ref(`posts/${newPostKey}`).set({
        creator : currentUser.uid,
        creatorName : currentUser.displayName,
        text : postTextArea
    });
}

//Muro-> Contador de likes

/*function contadorLike() {
    
}
*/

//window.onload = ()=>{

//firebase.database().ref('posts')

       /* .on('child_added', (newMessage)=>{
            postContainer.innerHTML += `
                <p>Nombre : ${newMessage.val().creatorName}</p>
                <p>${newMessage.val().text}</p>
            `;
        });
//}; */


// creamos un nuevo objeto con firebase
// utilizamos setcustomparametres , display popup, con eso le decimos  firebase que hagas el login con facebook en un popup
// ahora llamamos a firebase.auth , utilizamos singwithpopup, introducimos el provider y luego esa funcion retorna una promesa
// then para obtener el resultado y catch para los errores
// agregamos en firebase un dominio autorizado , 127.0.0.1 es el 200 ok

//Login con Facebook
let usurio1;
let img1;

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
        usuario1 = result.user.displayName;
        img1 = result.additionalUserInfo.profile.picture;
        
       
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




mostrarImgYNombre(usurio1,img1);


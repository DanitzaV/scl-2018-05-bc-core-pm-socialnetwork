// Función navbar
$(document).ready(function(){
    $('.sidenav').sidenav();
});

// Función dropdown navbar
$('.dropdown-trigger').dropdown();

let cantidadDeAmiwos = document.getElementById("cantidadDeAmigos");


agregarAmiguitoas = (userId, name , email, imageUrl) => {
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture : imageUrl
    });
}

eliminarAmigoa = () => {
    remove();
}

var ref = firebase.database().ref("dinosaurs");
ref.orderByKey().endAt("pterodactyl").on("child_added", function(snapshot) {
  console.log(snapshot.key);
});

const mostrarAmiguitos = () => {
    var rootRef = firebase.database.ref();
    var usersRef = rootRef.child("users");
    var usersQuery = usersRef.limitToLast(10);


    let contenedorcitoDeLosAmiguitos = document.createElement('div');
    contenedorcitoDeLosAmiguitos.classList('row'); 
    let colsito1 = document.createElement('div');
    colsito1.classList = 'col s4';
    let contenedor = document.getElementById('contenedor');
    let imagenDelAmiguitoa = document.createElement('img');
    imagenDelAmiguitoa.setAttribute('src', img);
    imagenDelAmiguitoa.className = 'imgDelAmigoa';
    let contenedorNombreAmigoa = document.createElement('div');
    contenedorNombreAmigoa.classList = 'col s8';
    let nombreAmigoa = document.createElement('p');
    let textoNombre = document.createTextNode(nombre);

    nombreAmigoa.appendChild(textoNombre);
    contenedor.appendChild(imagenDelAmiguito);
}


 

  


function saveReview(){
    const currentUser = firebase.auth().currentUser;
    console.log(currentUser);
    const nombreTienda = document.getElementById('txtNombreTienda').value;
    const reviewTienda = document.getElementById('txtReview').value;
    //const nombreTienda = document.getElementById('').value;
    let f = new Date();
    let fecha = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
     //Para tener una nueva llave en la colección messages
    const newReviewKey = firebase.database().ref().child('review').push().key;
    //Campos que se guardaran en la base de datos. 
    firebase.database().ref(`event/${newReviewKey}`).set({
         creator : currentUser.uid,
         creatorName : currentUser.displayName,
         fechaReview : fecha,
         nombreTienda: nombreTienda,
         imagenTienda : '',
         reviewTienda : reviewTienda
     }, function(error){
        //cuando completa la insercion del nuevo registro se envia a la pagina de listado.
        window.location = 'reviewEventos.html';
    });
    
}
//obtiene el evento cambio desde el input que sube archivos.
document.getElementById('campoArchivo').addEventListener("change", function(evento){ 
    evento.preventDefault();
    let archivo  = evento.target.files[0];
    subirArchivo(archivo);
});

// función que se encargará de subir el archivo
function subirArchivo(archivo) {
    let storageService = firebase.storage();
    // creo una referencia al lugar donde guardaremos el archivo
    let refStorage = storageService.ref('images').child(archivo.name);
    // Comienzo la tarea de upload
    let uploadTask = refStorage.put(archivo);

    // defino un evento para saber qué pasa con ese upload iniciado
    uploadTask.on('state_changed', null,
        function(error){
            console.log('Error al subir el archivo', error);
        },
        function(){
            console.log(uploadTask);
            console.log(uploadTask.snapshot);
            console.log('Subida completada');

            document.getElementById('imgReview').src = uploadTask.snapshot.downloadURL;
        //mensajeFinalizado(uploadTask.snapshot.downloadURL, uploadTask.snapshot.totalBytes);
        }
    );
    }
function saveReview(){
    let msg ='';
    const nombreTienda = document.getElementById('txtNombreTienda').value;
    const reviewTienda = document.getElementById('txtReview').value;
    const imgReview = document.getElementById('imgReview').src;

    if(nombreTienda === ''){
        msg = msg + 'Tiene que tener un nombre de tienda.\n';
    }
    if(reviewTienda === ''){
        msg = msg + 'Tiene que tener un review.\n';        
    }

    if(msg === ''){
        const currentUser = firebase.auth().currentUser;

        //const nombreTienda = document.getElementById('').value;
        let f = new Date();
        let fecha = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
         //Para tener una nueva llave en la colección messages
        const newReviewKey = firebase.database().ref().child('review').push().key;
         firebase.database().ref(`review/${newReviewKey}`).set({
             creator : currentUser.uid,
             creatorName : currentUser.displayName,
             fechaReview : fecha,
             nombreTienda: nombreTienda,
             imagenTienda : imgReview,
             reviewTienda : reviewTienda
         }, function(error){
            window.location = 'review.html';
        });
    }else{
       alert('Tiene campos sin completar:\n' + msg);
    }
}

function validateReview(){


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
    const uploadTask = refStorage.put(archivo);

    // defino un evento para saber qué pasa con ese upload iniciado
    uploadTask.on('state_changed', null,
        function(error){
            console.log('Error al subir el archivo', error);
        },
        function(){
            //obtiene la url de la imagen recien subida
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                //cambia el source de la imagen por la url de la imagen recien subida
                document.getElementById('imgReview').src = downloadURL;
              });
        }
    );
}
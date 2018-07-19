
 firebase.database().ref('messages')
        .limitToLast(2) // Filtro para no obtener todos los mensajes
        .once('value')
        .then((messages)=>{
            console.log(messages);
        })
        .catch(()=>{

        });
        // var imagesRef = storageRef.child('images').limitToLast(2).on('child_added', (newimg) => {
    
        // } )
       
    //Acá comenzamos a escuchar por nuevos mensajes usando el evento
    //on child_added
    firebase.database().ref('messages')
    .limitToLast(3)
    .on('child_added', (newMessage)=>{

        
        
    
        // let img;
        // console.log(img);
        let contenedor = document.getElementById('messageContainer');
        let divcreator = document.createElement('div');
        divcreator.classList = 'divcreator';
        let row = document.createElement('div');
        row.classList = 'row';
        let rowcreator = document.createElement('div');
        rowcreator.classList = 'row';
        let col12 = document.createElement('div');
        col12.classList = 'col s12 texto';
        let col6creator = document.createElement('div');
        col6creator.classList = 'col s6';
        let col6img = document.createElement('div');
        col6img.classList = 'col s6';
        let pcreator = document.createElement('p');
        let ptexto =  document.createElement('p');
        let textcreator = document.createTextNode(newMessage.val().creatorName);
        let texto = document.createTextNode(newMessage.val().text);
        let img = newMessage.val().creatorImg;
        let imgpost = document.createElement('img');
        imgpost.setAttribute('src', img);
        imgpost.className = 'imgpost';

        pcreator.appendChild(textcreator);
        ptexto.appendChild(texto);
        row.appendChild(col12);
        // rowcreator.appendChild(col12creator);

        col12.appendChild(ptexto);
        col6img.appendChild(imgpost);
        col6creator.appendChild(pcreator);
        rowcreator.appendChild(col6img);
        rowcreator.appendChild(col6creator);
        contenedor.appendChild(rowcreator);
        
        contenedor.appendChild(row);
       

        // console.log()
        // console.log(newMessage.val().text)
        
    });
 

   


function sendMessage(){
    const currentUser = firebase.auth().currentUser;
   console.log(currentUser);
    const messageAreaText = messageArea.value;

    //Para tener una nueva llave en la colección messages
    const newMessageKey = firebase.database().ref().child('messages').push().key;
    
    firebase.database().ref(`messages/${newMessageKey}`).set({
        creator : currentUser.uid,
        creatorName : currentUser.displayName,
        creatorImg: currentUser.photoURL,
        text : messageAreaText
    });

}


// function sendGif(){
//     const gifValue = gifArea.value;

//     const newGifKey = firebase.database().ref().child("gifs").push().key; //key permite que se generen llaves nuevas para guardar los gifs 
//     const currentUser = firebase.auth().currentUser; //Si estamos logueados, siempre podremos acceder a los datos, en este caso, a los gifs
//     firebase.database().ref(`gifs/${newGifKey}`).set({
//         gifURL : gifValue, 
//         creatorName : currentUser.displayName || //Si esto está null o undefined, sigue con la opción que le sigue "||"
//                         currentUser.providerData[0].email,
//         creator : currentUser.uid
//     });
// }
function sendPhotoToStorage(){
    const photoFile = photoFileSelector.files[0];
    const fileName = photoFile.name; // nombre del archivo, sirve para armar la ruta
    const metadata = { // datos sobre el archivo que estamos subiendo
        contentType : photoFile.type// tipo de archivo que estamos subiendo
    };
    // va a retornar una tarea= task (objeto)
    
    const task = firebase.storage().ref('images') //Corresponden a las carpetas que tenemos dentro del storage
        .child(fileName)
        .put(photoFile, metadata);
 
    task.then(snapshot => snapshot.ref.getDownloadURL())  //obtenemos la url de descarga (de la imagen)
        .then(ur => {
            const currentUser = firebase.auth().currentUser;
            messageContainer.innerHTML += `
            <img style="width: 25%; display: flex" src="${currentUser.photoURL}">
            <p> ${currentUser.displayName}</p>
            <img style="width: 200px; display: flex" src="${ur}">
            
        `;
        
    
    
        });
        
    
}
//jquery materialize 
$(document).ready(function(){
    $('.sidenav').sidenav();
  });


// Muro-> Opcion postear
   


    
    


//Muro-> Guardar mensajes posteados y mostrarlos en pantalla al momento de cargar la página.

function sendPost(){
        const currentUser = firebase.auth().currentUser;
       console.log(currentUser);
        const postUserTextarea = document.getElementById('cont').value;
    
        //Para tener una nueva llave en la colección messages
        const newMessageKe = firebase.database().ref().child('postUser').push().key;
                              
        
        firebase.database().ref(`postUser/${newMessageKe}`).set({
            creator : currentUser.uid,
            creatorName : currentUser.displayName,
            creatorImg: currentUser.photoURL,
            text : postUserTextarea
        });
};

// Muro -> Subir foto

function sendPhotoToStorage(){
    const photoFile = photoFileSelector.files[0];
    const fileName = photoFile.name; // nombre del archivo, sirve para armar la ruta
    const metadata = { // datos sobre el archivo que estamos subiendo
        contentType : photoFile.type// tipo de archivo que estamos subiendo
    };
    // va a retornar una tarea= task (objeto)
    const task = firebase.storage().ref('imagesPost') //Corresponden a las carpetas que tenemos dentro del storage
        .child(fileName)
        .put(photoFile, metadata);
 
    task.then(snapshot => snapshot.ref.getDownloadURL())  //obtenemos la url de descarga (de la imagen)
        .then(url => {
            console.log("URL del archivo > "+url);
        });
    }

//Muro-> Contador de likes
/*
// counters/${ID}
var likesUser = {
    "num_like": NUM_LIKES,
    "likes": [subcollection]
  }
  
  // counters/${ID}/shards/${NUM}
  var countLikeUser = {
    "count": 123
  }

function createCounter(ref, num_like) {
    var batch = db.batch();

    // Initialize the counter document
    batch.set(ref, { num_like: likes });

    // Initialize each shard with count=0
    for (let i = 0; i < num_like; i++) {
        let shardRef = ref.collection('countLike').doc(i.toString());
        batch.set(shardRef, { count: 0 });
    }

    // Commit the write batch
    return batch.commit();

};

function incrementCounter(db, ref, num_like) {
    // Select a shard of the counter at random
    const likes_id = Math.floor(Math.random() * num_like).toString();
    const likes_ref = ref.collection('countLike').doc(likes_id);

    // Update count in a transaction
    return db.runTransaction(t => {
        return t.get(likes_ref).then(doc => {
            const new_count = doc.data().count + 1;
            t.update(likes_ref, { count: new_count });
        });
    });
};
function getCount(ref) {
    // Sum the count of each shard in the subcollection
    return ref.collection('countLike').get().then(snapshot => {
        let total_count = 0;
        snapshot.forEach(doc => {
            total_count += doc.data().count;
        });

        return total_count;
    });
};
*/

const boton = document.getElementById('btn');
boton.addEventListener('click', () => { 
    let comments = document.getElementById("postUser").value;
    if(comments.length == 0  ) {
        document.getElementById("postUser").disabled = false;
    }else{
        document.getElementById("postUser").disabled = true;
        document.getElementById("postUser").value = '';
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
    });
    }
});
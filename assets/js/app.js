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



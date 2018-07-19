
$(document).ready(function(){
    $('.sidenav').sidenav();
    

  });
 

  function mostrarImgYNombre(nombre, img){
    
    let contenedor = document.getElementById('contenedor');
    let contenedorp = document.getElementById('displayname');
    let contNavbar = document.getElementById('imguser');
    let imge = document.createElement('img');
    let p = document.createElement('p');
    let textop = document.createTextNode(nombre);
    imge.setAttribute('src', img);
    imge.className = 'imgusuario';
    let imgNavbar = document.createElement('img');
    imgNavbar.setAttribute('src', img);
    imgNavbar.className = 'imgnavbar';
    
   


   contNavbar.appendChild(imgNavbar);
    contenedor.appendChild(imge);
    p.appendChild(textop);
    contenedorp.appendChild(p);
    
    
   

    // let template = `<p>${nombre}</p>`


    //    console.log(nombre);
    //    console.log(img);
    // contenedor.appendChild(template);
       


  }
  function cerrar_sesion() { 
    firebase.auth().signOut().then(function() {
      window.location.href = '../../index.html'
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
   } 


      
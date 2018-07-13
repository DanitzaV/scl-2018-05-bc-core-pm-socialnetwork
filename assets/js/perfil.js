
$(document).ready(function(){
    $('.sidenav').sidenav();
  });

mostrarImgYNombre();
  function mostrarImgYNombre(nombre, img){
    let contenedor = document.getElementById('contenedor');
    let imge = document.createElement('img');
    let p = document.createElement('p');
    let textop = document.createTextNode(nombre);
    imge.setAttribute('src', )
    contenedor.appendChild(imge);
    p.appendChild(textop);
    contenedor.appendChild(p);



    //    console.log(nombre);
    //    console.log(img);
       


  }
      
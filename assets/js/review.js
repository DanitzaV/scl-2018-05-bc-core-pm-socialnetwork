
firebase.database().ref('review')
.limitToLast(10)
.on('child_added', (newReview)=>{
    //console.log(newReview.val());
    
    let contenedor = document.getElementById('reviewContent');
    
    //contenedor del review
    let divReview = document.createElement('div');
    divReview.classList.add("form", "row"); 

    let divRowData = document.createElement('div');
    divRowData.classList.add("row");
    //Imagen de la tienda
    let divImgTienda = document.createElement('div');
    divImgTienda.classList.add("col", "m3");

    let tiendaImg = document.createElement("img")
    tiendaImg.style.height = '10em';
    tiendaImg.style.width = '10em';
    //console.log('imagen:' + newReview.val().imagenTienda);

    tiendaImg.setAttribute('src',  newReview.val().imagenTienda);

    divImgTienda.appendChild(tiendaImg);

    let divDataTienda = document.createElement('div');
    divDataTienda.classList.add("col", "m9");

    let divNombreTienda = document.createElement('div')
    divNombreTienda.classList.add("row");

    let nombreTienda = document.createTextNode('Tienda:' + newReview.val().nombreTienda);
    divNombreTienda.appendChild(nombreTienda);

    let divUsuarioTienda = document.createElement('div')
    divUsuarioTienda.classList.add("row");

    let usuarioTienda = document.createTextNode('Por:' + newReview.val().creatorName);
    divUsuarioTienda.appendChild(usuarioTienda);

    let divFechaTienda = document.createElement('div')
    divFechaTienda.classList.add("row");
    let fechaTienda = document.createTextNode(newReview.val().fechaReview);
    divFechaTienda.appendChild(fechaTienda);

    divDataTienda.appendChild(divNombreTienda);
    divDataTienda.appendChild(divUsuarioTienda);
    divDataTienda.appendChild(divFechaTienda);

    divRowData.appendChild(divImgTienda);
    divRowData.appendChild(divDataTienda);

    


    let divReviewTienda = document.createElement('div');
    divReviewTienda.classList.add("row");

    let divReviewTextTienda = document.createElement('div')
    divReviewTextTienda.classList.add("col","M12");
    let reviewtextTienda = document.createTextNode(newReview.val().reviewTienda);
    divReviewTextTienda.appendChild(reviewtextTienda);
    divReviewTienda.appendChild(divReviewTextTienda);
    
    divReview.appendChild(divRowData);
    divReview.appendChild(divReviewTienda);
   
    
    contenedor.appendChild(divReview);
   
});

function newReview(){
    window.location = 'shops.html';

}

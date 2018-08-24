$('#btnEnviar').click(function () {
    //    let newCard={
    //        'imagen':imagenes,
    //        'title':title,
    //        'descripcion':description,
    //        'user':author
    //    }
    imagenes; 
    title = $('#title-add-pin').val();
    description = $('#description-add-pin').val();
    authorUser = 'yas';
    let botoncard = `<button class='btns' id="btnCreadoPin" style="background-color:#c1cccd">${title}</button>`;
    containerScroll.innerHTML += botoncard;
    let tarjetaAgregada;
    tarjetaAgregada += `<div class="card" id="cards">`;
    tarjetaAgregada += `<img src="${imagenes}" class="card-img" id="imgs">`
    tarjetaAgregada += `<div class="card-body">`
    tarjetaAgregada += `<div class="square"><h5>${title}</h5>`
    tarjetaAgregada += `<p class="pin-likes"><i class="fas fa-thumbtack"> ${Math.floor(Math.random() * 50) + 1}k</i> <i class="fas fa-check"> ${Math.floor(Math.random() * 100) + 1}</i></p></div>`
    tarjetaAgregada += `<p class="card-text">${description}</p>`;
    tarjetaAgregada += `<p class="card-text"><div class="authorsName"><span class="eme">M</span>${authorUser} #hashtag</div></p>`;
    tarjetaAgregada += `</div>`;
    tarjetaAgregada += `</div>`;
    containertoCards.innerHTML += tarjetaAgregada;
    $('#addPinsToFavorites').modal('hide');
});



function addCard(item){
    card += `<div class="card" id="cards" onclick="displayModal('${item}')">`;
    card += `<img src="${image}" class="card-img" id="imgs">`
    card += `<div class="card-body">`
    card += `<div class="square"><h5>${item.title}</h5>`
    card += `<p class="pin-likes"><i class="fas fa-thumbtack"> ${Math.floor(Math.random() * 50) + 1}k</i> <i class="fas fa-check"> ${Math.floor(Math.random() * 100) + 1}</i></p></div>`
    card += `<p class="card-text">${item.tags}</p>`;
    card += `<p class="card-text"><div class="authorsName"><span class="eme">M</span>${author} #hashtag</div></p>`;
    card += `</div>`;
    card += `</div>`;
    containertoCards.innerHTML += card
}

function addModal(item){
    let modalCard;
    modalCard += `<div class="modal fade" id="modalModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="icons-float closeButton">
                       <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>`
    modalCard+= `<div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="row pd-header-modal" id ="modalHeader">
                            <div class="col-9 iconsModal">
                                <i class="fas fa-upload"></i><i class="fas fa-check"></i><i class="fas fa-ellipsis-h"></i>
                            </div>`
    modalCard+=             `<div class="col-2">
                                <button type="button"  id="btnSave"class="btn btn-danger">
                                <i class="fas fa-thumbtack"></i>Guardar
                                </button>
                            </div>
                        </div>`
    modalCard+=        `<div class="modal-header">
                        <h5 class="modal-title" id="pinModalTitle">${item.title}</h5>
                        </div>`
    modalCard+=        `<div class="modal-body">
                        <div id="imageModal"><img class="card-img" src="${image}"></div>
                        <div class="row" id ="modalHeader">
                            <div class="col-9 iconsModal">
                            <i class="fas fa-upload"></i><i class="fas fa-check"></i><i class="fas fa-ellipsis-h"></i>
                            </div>
                            <div class="col-2">
                            <button type="button" class="btn btn-danger savePinModal"><i class="fas fa-thumbtack"></i>Guardar
                            </button>
                            </div>
                        </div>`
    modalCard+=        `<div class="row" id="rowAuthor">
                            <div class="col-9" id="nameAuthor">
                                <span class="eme ">M</span>
                                <p id="userModal" class="modalUserText">${author}</p>
                            </div>
                            <div class="col-2">
                            <button type="button" class="btn btn-light leerlo">Leerlo</button>
                            </div>
                        </div>`
    modalCard+=        `<div class="row">
                            <div class="col-12">
                                <p id="modalDescription">${item.tags}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>`
    let modalCard2=`<div class="z-Icons">
                <i class="fas fa-plus" id="addMorePins"></i>
                <i class="fas fa-question"></i>
                </div>`            
    mymodal.innerHTML +=modalCard;
    modalModal.innerHTML+=modalCard2;

    $('#modalModal').modal('hide')
}
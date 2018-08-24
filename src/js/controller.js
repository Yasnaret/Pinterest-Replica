let card = '';
let search;
let image;
let imagenes;
let author;
let item;
let searchInput;
let backgroundColors=['#6a7780','#7d969f','#c1cccd','#e9c6be','#cbb8bc','#ede7dd','#9dadc5','#245a6b','#54392c','#536070','#b98d96','#5d9fdd','#9fcec0','#f7ab65','#a488ef']
let capitals = ['Nueva Delhi', 'Tokio', 'Moscú', 'Bangkok', 'Ankara', 'Helsinki', 'Paris', 'Budapest', 'Londres', 'Bucarest', 'Kiev', 'Singapur', 'Atenas', 'Lisboa', 'Madrid'];
let title;
let description;
let authorUser;

function addTags() {
    backgroundColors,capitals;

    for (let i = 0; i < capitals.length; i++) {
        let buttons = `<button class='btns' style="background-color:${backgroundColors[i]}">${capitals[i]}</button>`;
        containerScroll.innerHTML += buttons;
    }
}
addTags();

// buttons slide

$('#right-button').click(function () {
    event.preventDefault();
    $('#containerScroll').animate({
        scrollLeft: "+=300px"
    }, "slow");
});

$('#left-button').click(function () {
    event.preventDefault();
    $('#containerScroll').animate({
        scrollLeft: "-=300px"
    }, "slow");
});



function addImages(data) {
    
    $.each(data.items, function (i, item) {
        image = item.media.m.replace('_m.', '.');
        let author2 = item.author.replace('nobody@flickr.com ("', '');
        author=author2.replace('")','');
        addCard(item)
        addModal(item)
        
    })
}


function displayModal(item){
    $('#modalModal').modal('show');
   
}

$('#addMorePins').click(function(){
    $('#addPinsToFavorites').modal('show')
})

window.addEventListener('load', function() {
document.querySelector('input[type="file"]')
.addEventListener('change', function() {
    if (this.files && this.files[0]) {
        imagenes = URL.createObjectURL(this.files[0]);
        imagenes.onload= imagenisLoaded()
    }
});
});

function imagenisLoaded(e){
    alert("Tu imagen ha sido cargada de manera exitosa")}





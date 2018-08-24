

//  get Data 

$('.btns').click(function() {
       
    $('.btns').removeClass("selected");
    $(this).addClass("selected");
    search = $(this).text();

    let flickrUrlAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    
    $.getJSON(flickrUrlAPI, {
        tags: search,
        format: "json"
    }).done((data) => {
        $('#containertoCards').empty();
        addImages(data)

    }).fail((error) => {
        console.log(error);
        console.log("Ajax call failed.")
    })
});


$("#inputHeader").on("keydown",function(e) {
 
    if(e.keyCode == 13) {
        searchInput=$(this).val()
    

    let flickrUrlAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    
    $.getJSON(flickrUrlAPI, {
        tags: searchInput,
        format: "json"
    }).done((data) => {

        $('#containertoCards').empty();
        addImages(data)

    }).fail((error) => {
        console.log(error);
        console.log("Ajax call failed.")
    })
    }
});  
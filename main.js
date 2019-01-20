$('#recipeCarousel').carousel({
  interval: 10000
})

$('.carousel .carousel-item').each(function(){
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
    }
    else {
      $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    }
});
function changebg (){
    var doc = document.getElementById("imagee");
    if (doc.innerHTML == `<img src="images/ic_available_app_store_norml@1x.png" style="width:100%; height: 100%;">`){
        doc.innerHTML=`<img src="images/ic_available_app_store_pressed@1x.png" style="width:100%; height: 100%;">`;
    }
    else{
        doc.innerHTML=`<img src="images/ic_available_app_store_norml@1x.png" style="width:100%; height: 100%;">`;
    }
}
function changebgg (){
    var doc = document.getElementById("imageee");
    if (doc.innerHTML == `<img src="images/ic_available_google_play_normal@1x.png" style="width:100%; height: 100%;">`){
        doc.innerHTML=`<img src="images/ic_available_google_play_pressed@1x.png" style="width:100%; height: 100%;">`;
    }
    else{
        doc.innerHTML=`<img src="images/ic_available_google_play_normal@1x.png" style="width:100%; height: 100%;">`;
    }
}
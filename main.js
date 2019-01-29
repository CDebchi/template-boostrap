function afficher (k){
  var ch = "<ul>";
  for (var j = 0; j<k.length; j++){
    ch += `<li>${k[j].label_service}</li>`
  }
  ch += "</ul>";
  return ch;
}
$.getJSON("https://jsonp.afeld.me/?callback=?&url=https://api.myglamapp.pl/api/categories?language=EN", function (api) {
console.log(api.data);

for (i = 0; i<api.data.length; i++){   
  var k =api.data[i].Services;
  var l = afficher(k);  
  var doc = document.getElementById(`div${i}`);
    doc.innerHTML += `<div>
    <img src="http://${api.data[i].imagePath}">      
    <h5 class="text-center">${api.data[i].label}</h5>
    ${l}        
  </div>`;
  
    
}
});
$(document).on('ready', function() {
    $(".regular").slick({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
    });
  });
  
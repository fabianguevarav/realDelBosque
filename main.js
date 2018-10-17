function showModal(modalId){
	$(modalId).modal("show");
}

// informes modal
$('.ano2016').hide();
$('.btn2016').click(() =>{

    $('.ano2016').toggle();
    $('.ano2017').hide();
    $('.anuales').hide();


   });
$('.ano2017').hide();
$('.btn2017').click(() =>{

    $('.ano2017').toggle();
    $('.ano2016').hide();
    $('.anuales').hide();
   });
$('.anuales').hide();
$('.btnYear').click(() => {

     $('.anuales').toggle();
     $('.ano2017').hide();
     $('.ano2016').hide();
});

// agrega mapa de google a contacto.html
// Initialize and add the map
function initMap() {
	// The location of Uluru
	var uluru = {lat: 19.387584, lng: -99.223988};
	// The map, centered at Uluru
	var map = new google.maps.Map(
			document.getElementById('map'), {zoom: 15, center: uluru});
	// The marker, positioned at Uluru
	var marker = new google.maps.Marker({position: uluru, map: map});
}
console.log('holi');

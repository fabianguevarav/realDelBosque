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
})


//firebase

const provider = new firebase.auth.FacebookAuthProvider();

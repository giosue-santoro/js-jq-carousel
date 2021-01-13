$(document).ready(function() {
    
    //Funzione per rendere attivo bottone next
    $('.next').click(function(){
        //Condizioni per rendere attivo bottone next anche dopo prima/ultima immagine
        if ($('.last').hasClass('active') === false) {
            $('.active').removeClass('active').next().addClass('active')
        } else {
            $('.active').removeClass('active')
            $('.first').addClass('active')
        }
    })

    //Funzione per rendere attivo bottone prev
    $('.prev').click(function(){
        //Condizioni per rendere attivo bottone prev anche dopo prima/ultima immagine
        if ($('.first').hasClass('active') === false) {
            $('.active').removeClass('active').prev().addClass('active')
        } else {
            $('.active').removeClass('active')
            $('.last').addClass('active')
        }
    })
    
    //Ridimensionamento immagini
    $('img').css({'width':'1200px'})
    
})
        

    //Funzione per rendere attivo bottone prev
    // $('.prev').click(function() {
    //     $('.active').removeClass('active').prev().addClass('active')
    // })

    //Funzione per rendere attivo bottone next
    // $('.next').click(function() {
    //     $('.active').removeClass('active').next().addClass('active')
    // })








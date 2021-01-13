$(document).ready(function() {

    //Funzione per rendere attivo bottone prev
    $('.prev').click(function() {
        $('.active').removeClass('active').prev().addClass('active')
    })

    //Funzione per rendere attivo bottone next
    $('.next').click(function() {
        $('.active').removeClass('active').next().addClass('active')
    })

})











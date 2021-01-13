$(document).ready(function() {

    $('next').click(function() {
        $('.active').removeClass('active').next().addClass('active')
    })

    $('prev').click(function() {
        $('.active').removeClass('active').prev().addClass('active')
    })

})









$(document).ready(function(){

    $('nav').hide();

    // Setup our click function
    $('.menu-button').click(function (){
        $('nav').slideToggle();
    });

});
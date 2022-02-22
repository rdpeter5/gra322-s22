$(document).ready(function(){
    /*
    finding the nav element and hiding it here this is how you
    write comments on multiple lines

    // to write commeents on individual lines.
    */
    $('nav').hide();

    // Setup our click function
    $('.menu-button').click(function (){
        $('nav').slideToggle();
    });

});
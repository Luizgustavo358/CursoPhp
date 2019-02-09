$(document).ready(function () {

   // mostra menu
   $('.ind-botao').on('click', function () {
       $('nav li').toggle();
   });

    $('nav li').on('click', function () {
        var link = $(this).children('a').attr('href');

        window.location.href = link;
    });
});
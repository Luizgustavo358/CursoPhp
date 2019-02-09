$(document).ready(function () {

    // mostra menu
    $('.ind-botao').on('click', function () {
        $('nav li').toggle();
    });

    // muda de pagina
    $('nav li').on('click', function () {
        var link = $(this).children('a').attr('href');

        window.location.href = link;
    });

    // transicao do slide
    $('.ind-slide').cycle({
        fx: 'fade'
    });
});
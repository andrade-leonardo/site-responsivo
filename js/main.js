$(function() {
    $('.menu-principa__btn').on('click', function() {
        $('.menu-principal').toggleClass('menu-principal--fechado');
    });

    $('.depoimentos__caixa').slick({
        autoplay: true,
        arrows: false,
        dots: true
    });

    $('.formulario').validate({
        rules: {
            email: {
                required: true,
                email: true,
            },
            nome: {
                required: true,  
            },
            mensagem: {
                required: true,  
            },
        },
        messages: {
            email: {
                required: 'Por favor informe o e-mail.',
                email: 'Preencha o campo com um e-mail válido'
            },
            nome: {
                required: 'Por favor informe o seu nome.',
            },
            mensagem: {
                required: 'Por favor informe a mensagem.',
            },
        }
    });
});

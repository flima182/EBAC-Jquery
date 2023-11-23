//instancia jQuery e evita conflitos

//jQuery(function($)

$(document).ready(function () {

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') //tag
    let items = $('.featured-item') //class
    let destaques = $('#featured') //id

    console.log(titulos.first());

});

//Configuração de produtos

$('.featured-item a').addClass('btn btn-dark stretch-link')


//$('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
$('.featured-item h4').after('texto simples')

//$('.featured-item:first h4').css('color', '#FF0000')

//$('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span')
//$('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span')
//$('.featured-item:first h4').addClass('active')
//$('.featured-item:first h4').removeClass('active')
//$('.featured-item:first h4').toggleClass('active')
//$('.featured-item:first h4').hide()
//$('.featured-item:first h4').show()
//$('.featured-item:first h4').fadeIn(2000)
//$('.featured-item:first h4').fadeOut()
//$('.featured-item:first h4').css('color', '#FF0000')


/*$('.featured-item h4').dblclick(function () {

    $(this).css({

        'color': '#F00',
        'background': '#FF0',
        'font-weight': '100',

    })

});

$('.featured-item a').on('click', function (event) {

    event.preventDefault();
    alert('Produto esgotado');
})*/



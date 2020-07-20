$('.navbar-header, .main-menu').off('mouseenter').off('mouseleave');

$('nav.header-navbar a.menu-handle').off('click');
$('nav.header-navbar a.menu-handle').on('click',function (evt) {
    var collapsed=$('body').hasClass('menu-collapsed');
    if (collapsed) {
        $('body').removeClass('menu-collapsed');
        $('body').addClass('menu-expanded');
        $('div.main-menu').addClass('expanded');
        $(this).html('<i class="ficon feather icon-arrow-left"></i>');
    }else{
        $('body').addClass('menu-collapsed');
        $('body').removeClass('menu-expanded');
        $('div.main-menu').removeClass('expanded');
        $(this).html('<i class="ficon feather icon-align-left"></i>');
    }
});

$("#inlineForm").on('show.bs.modal', function () {    
    $('.first').css('display','block');
    $('.second').css('display','none');
});

$('#trust').on('click',function(evt){
    $('.first').css('display','none');
    $('.second').css('display','block');
});
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

new Dropzone(document.body, { // Make the whole body a dropzone
    url: "#", // Set the url
    previewsContainer: "#dpz-btn-select-files", // Define the container to display the previews
    clickable: "#select-files" // Define the element that should be used as click trigger to select files.
  });

$('span a.btn.round').css('border','1px solid #282D33');
$('span a.btn.round').css('color','white');
$('span a.btn.round').on('click',function(){
    if ($(this).hasClass('selected')) {        
        $(this).removeClass('selected');
        $(this).css('border','1px solid #282D33');
        $(this).css('color','white');
    } else {
        $(this).addClass('selected');
        $(this).css('border','1px solid #FF0039');
        $(this).css('color','#FF0039');
    }
});

$('button.next-btn').on('click',function(){
    var currentTab=$('.nav-tabs .nav-link.active');
    var nextTab=currentTab.parent().next().children().attr('href');
    $('.nav-tabs a[href="'+nextTab+'"]').tab('show')
});

$('button.cancel-btn').on('click',function(){
    $('.nav-tabs a:first').tab('show');
});
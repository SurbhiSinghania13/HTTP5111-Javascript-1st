//LAB 10 - 2 INVENTORY PAGE
$(window).on("load",function(){

    $('.desc').hide();

    $('tr').hover(function(){
        $(this).addClass('selected');
    },function(){
        $(this).removeClass('selected');
    });

    $('tr').on('click',function(){
        $('.desc').hide();
        $(this).find('.desc').toggle();
    })

});

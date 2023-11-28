//LAB 10 - 1 FAQ PAGE

$(window).on("load",function(){
    $('p').hide();
    $('h2').on('click',function(){
        $('.contentBox').slideUp(3000);
        $(this).next('.contentBox').slideToggle(3000);
    })
    $('p').hover(
        function(){$('p').addClass('textHovered');
    },
    function(){$('p').removeClass('textHovered');
    }
    );
});

$(document).ready(function() {
    var mywindow = $(window);
    var mypos = mywindow.scrollTop();
    var newscroll;
    
    
    mywindow.scroll(function () {
    
        newscroll = mywindow.scrollTop();
        if (newscroll < 100) {
          $('.wrapper').stop().fadeIn("fast");
    
        } else if (newscroll > mypos) {
            $('#titleAppear').stop().fadeOut("fast");
            $('.wrapper').stop().fadeOut("fast");
    
        } else if(newscroll < mypos) {
            $('#titleAppear').stop().fadeIn("fast");
        // } else if ($(document).height() <= ($(window).height() + $(window).scrollTop())) {
        //     $('#titleAppear').css("display","block");
        //     $('#titleAppear').css("opacity","1");
         }
        mypos = newscroll;
    });

    // $(window).scroll(function() {
    //     if ($(document).height() <= ($(window).height() + $(window).scrollTop())) {
    //         $('#titleAppear').css("display","block");
    //         $('#titleAppear').css("opacity","1");
    //     }
    // });
});


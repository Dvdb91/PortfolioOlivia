$(document).ready(function() {
    var mywindow = $(window);
    var mypos = mywindow.scrollTop();
    var newscroll;
    
    
    mywindow.scroll(function () {
    
        newscroll = mywindow.scrollTop();
        if (newscroll < 100) {
          $('.wrapper').stop().fadeIn("fast");
    
        } else if (newscroll > mypos) {
            $('#oliviaS').stop().fadeOut("fast");
            $('.wrapper').stop().fadeOut("fast");
    
        } else if(newscroll < mypos) {
            $('#oliviaS').stop().fadeIn("fast");
        }
        mypos = newscroll;
    });
});
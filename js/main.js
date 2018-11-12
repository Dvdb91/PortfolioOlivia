
// $(document).ready(function() {
// var mywindow = $(window);
// var mypos = mywindow.scrollTop();
// var up = false;
// var newscroll;


// mywindow.scroll(function () {

//     newscroll = mywindow.scrollTop();
//     if (newscroll < 100) {
//       $('.wrapper').stop().fadeIn();
//       up = !up;

//     } else if (newscroll > mypos && !up) {
//         $('#oliviaS').stop().fadeOut();
//         $('.wrapper').stop().fadeOut();
//         up = !up;
//         console.log(up);

//     } else if(newscroll < mypos && up) {
//         $('#oliviaS').stop().fadeIn();
//         up = !up;
//     }
//     mypos = newscroll;
// });
// });


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

    // $('.pictures').on( "click", function() {

    //     $('.pictures').css("transform", "scale(3.0)");

    // });
});
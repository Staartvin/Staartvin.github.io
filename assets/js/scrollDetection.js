var lastScrollDirection = "none";

$(window).scroll(function() {
    
    var dif = $(document).height() - $(window).height() - $(window).scrollTop();
    
    if (dif < 50 && lastScrollDirection == "down") {
        alert("Close enough now!");
    }

});

var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // downscroll code
       lastScrollDirection = "down";
   } else {
      // upscroll code
        lastScrollDirection = "up";
   }
   lastScrollTop = st;
});
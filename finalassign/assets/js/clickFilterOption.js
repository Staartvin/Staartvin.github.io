$(document).ready(function() {
   $(".checkbox.category2").on("change", function(){
       
       var checked = $(this).find(":first-child").is(':checked');
       
       if (!checked) {
           var thoughts = $('*').filter(function() {
    return $(this).data('category') === "do you feel like";
});
           
           for (var i=0;i<thoughts.length;i++) {
               var thought = thoughts[i];
               $(thought).fadeOut(500);
           }
       } else {
           var thoughts = $('*').filter(function() {
                return $(this).data('category') === "do you feel like";
             });
           
           for (var i=0;i<thoughts.length;i++) {
               var thought = thoughts[i];
               $(thought).fadeIn(500);
           }
       }
   });
    
     $(".checkbox.category1").on("change", function(){
       
         var checked = $(this).find(":first-child").is(':checked');
       
       if (!checked) {
           var thoughts = $('*').filter(function() {
    return $(this).data('category') === "am I the only one";
});
           
           for (var i=0;i<thoughts.length;i++) {
               var thought = thoughts[i];
               $(thought).fadeOut(500);
           }
       } else {
           var thoughts = $('*').filter(function() {
                return $(this).data('category') === "am I the only one";
             });
           
           for (var i=0;i<thoughts.length;i++) {
               var thought = thoughts[i];
               $(thought).fadeIn(500);
           }
       }
   });
});
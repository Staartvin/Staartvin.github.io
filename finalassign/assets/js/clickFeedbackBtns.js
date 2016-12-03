$(document).ready(function() {
   $(".feedback-thought-button").on("click", function(){
       
           if ($(this).hasClass("agree-button")) {
               $(this).find(".feedback-icon").toggleClass("likedComment");
               $(".disagree-button").find(".feedback-icon").removeClass("dislikedComment");
           } else {
               $(this).find(".feedback-icon").toggleClass("dislikedComment");
               $(".agree-button").find(".feedback-icon").removeClass("likedComment");
           }
   });
});
$(document).ready(function() {
   $(".comments-title").on("click", function(){
       console.log("test");
       $(this).parent().find(".comments-section").slideToggle(400);
       $(this).parent().toggleClass("dropup");
   });
});
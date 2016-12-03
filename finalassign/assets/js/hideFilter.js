$(document).ready(function() {
   $(".filter-title").on("click", function(){
      console.log("Filter clicked");
       $(this).parent().parent().find(".panel-body").slideToggle();
        $(this).parent().toggleClass("dropup");
   });
});
$(document).ready(function() {
    var favoriteString = getCookie("favoritedImages");
    
    var favorites = favoriteString.split(",");
    
    var arrayLength = favorites.length;
    var count = 0;
    
    for (var i = 0; i < arrayLength; i++) {
        var favorite = favorites[i];
        
        console.log(favorites[i]);
        
        if (favorite == undefined || favorite == "") continue;
        
        var src = images[favorite];
        
        addFavoriteBox(src);  
        count++;
    }
    
    // No favorites!
    if (count == 0) {
        $("#title").text("Oops, it looks like you don't have any favorites!");
        $("#subtitle").text("You can add favorites by clicking on the heart icon.");
    }
    
});

function addFavoriteBox(src) {
     // Clone current active image
        var clone = $(".item:first").clone();
        
        var imgChild = clone.find("img");
        
        // Change image source
        imgChild.attr("src", src);
    
        clone.appendTo(".row.features");
        clone.show();
    
}
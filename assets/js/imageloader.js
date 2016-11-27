var images = {
    image4: "http://hdwallpapersrocks.com/wp-content/uploads/2014/05/Girl-and-boy-friendship.jpg",
    image5: "http://thiswallpaper.com/cdn/hdwallpapers/1109/beautiful%20prague%20city%20widescreen%20wallpaper.jpg",
    image6: "http://dreamatico.com/data_images/lion/lion-8.jpg",
    image7: "https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg",
    image8: "http://www.guys.nl/wp-content/uploads/2016/08/narcos-season-2.jpg",
    image9: "http://www.ox.ac.uk/sites/files/oxford/styles/ow_medium_feature/public/field/field_image_main/wave.jpg?itok=XS6D8dpD",
    image10: "http://www.blogical.in/wp-content/uploads/2015/07/5xNuy.jpg",
    image11: "https://s-media-cache-ak0.pinimg.com/originals/b6/b8/49/b6b849e650761a80c2f04bb614e019f6.jpg",
    image12: "https://www.tesla.com/sites/default/files/configurator/MODELX_20161115b/1440/UI/ui_category_battery.jpg",
    image13: "https://static.pexels.com/photos/96918/pexels-photo-96918.jpeg",
    image14: "http://www.thespecialistsltd.com/files/Replica_AK47.jpg",
    image15: "http://sf.co.ua/14/07/wallpaper-1303595.jpg",
    image16: "http://userscontent2.emaze.com/images/79aedbfd-6c65-4a84-bd3f-38c24e7d6c28/8789506b-df47-4d1e-ad47-d5cca2a81a65.jpg",
    image17: "http://weknowyourdreams.com/images/vegetable/vegetable-02.jpg",
};

$(document).ready(function() {
    
   $("#previousButton").on("click", function() {
       console.log("Previous");
       changeImage("previous");
   });
    
    $("#nextButton").on("click", function() {
      console.log("Next");
      changeImage("next");
    });
    
    $("#favoriteButton").click(function() {
      console.log("Favorite this image"); 
        favoriteImage();
    });

});

function changeImage(direction) {
    addImage();
}

function addImage() {
     // Clone current active image
        var clone = $(".carousel-inner div:last-child").clone();
        
        // Remove active class so it is now displayed
        clone.removeClass("active");
        
        var imgChild = clone.children(":first");
        
        // Get current image ID
        var imageID = imgChild.attr("id");
        imageID = imageID.replace("image", "");
        
        var ID = parseInt(imageID);
        // Determine next ID based on last id
        var nextID = ID + 1;
        
        // Get next image source
        var nextSource = images["image" + nextID];
        
        if (nextSource == undefined) {
            console.log("Do not append extra images");
            return;
        }
        
        // Change image source
        imgChild.attr("src", nextSource);
        imgChild.attr("id", "image" + nextID);
        
        clone.appendTo(".carousel-inner");
        
        console.log("Image source: " + nextSource);
        console.log("Image ID: image" + nextID);
}

function favoriteImage() {
    var currentImage = $(".item.active");
    
    var imageID = currentImage.children(":first").attr("id");
    var cookieKey = "favoritedImages";
    
    // Check if we already stored an image
    if (getCookie(cookieKey) == "") {
         setCookie(cookieKey, imageID, 365);
    } else {
        // This image is already stored once.
        if (getCookie(cookieKey).indexOf(imageID) != -1) {
            return;
        }
        // Add image to other images
        setCookie(cookieKey, getCookie(cookieKey) + "," + imageID, 365);
    }
    
    console.log("DOINT THS");
    // Show alert message
    $("#favoriteImgAlert").fadeIn();
    
    // Hide message
    setTimeout(function() {
         $("#favoriteImgAlert").fadeOut();
        }, 3000);

}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
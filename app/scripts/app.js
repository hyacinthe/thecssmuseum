(function(window,document){
    define(["jquery","models/gallery", "views/gallery"], function($,Gallery,GalleryView) {


        return {
            run : function(){

                $.when(Gallery.get()).done(function(paintings){
                    var galleryView = GalleryView.create(paintings);
                    $("#container").html(galleryView.render());
                });
            }
        };
    });
})(window,document);

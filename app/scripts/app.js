(function(window,document){
    define(["jquery","models/gallery", "views/gallery"], function($,Gallery,GalleryView) {


        function testing(){
            return $("#mocha").length !== 0;
        }

        return {
            run : function(){
                $(document).ready(function(){
                    $.when(Gallery.get()).done(function(paintings){

                        var galleryView = GalleryView.create(paintings);


                        if(!testing()){
                            $("#down > h3 > a").on("mouseover", function(){
                                var marginset = $(".tableau").css("margin-right").replace(/[^-\d\.]/g, '');
                                var posgall = $("#gallery").css("margin-left").replace(/[^-\d\.]/g, '');
                                var n = posgall -500 - marginset;
                                $("#gallery").css("margin-left", n);
                            });
                        }
                    });

                });

            }
        };
    });
})(window,document);

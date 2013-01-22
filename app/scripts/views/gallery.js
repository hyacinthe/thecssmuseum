define(["underscore","backbone","models/painting","handlebars","text!templates/gallery.html"],

    function(_,Backbone,Painting,Handlebars,galleryTemplate){

        var Gallery = Backbone.View.extend({

            template : Handlebars.compile(galleryTemplate),

            events : {
                "mouseover #down > h3 > a" : "next"
            },

            initialize : function(options){
                var options = options || {};
                if(typeof options.models === 'undefined'){
                    throw new Error("models required");
                }
            },

            next : function(){
                var marginset = $(".tableau").css("margin-right").replace(/[^-\d\.]/g, '');
                var posgall = $("#gallery").css("margin-left").replace(/[^-\d\.]/g, '');
                var n = posgall -500 - marginset;
                $("#gallery").css("margin-left", n);
            },

            render : function(){
                $(this.el).html(this.template());
                return this.el;
            }

        });

        return {

            Gallery : Gallery,

            create : function(paintings){
                if(typeof paintings === 'undefined'){
                    throw new Error("Paintings required");
                }

                return new Gallery({
                    models: _.map(paintings, function(p){ return new Painting(); })
                });
            }
        };
    }
);

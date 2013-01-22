define(["underscore","backbone","models/painting","handlebars","text!templates/gallery.html"],

    function(_,Backbone,Painting,Handlebars,galleryTemplate){

        var Gallery = Backbone.View.extend({

            template : Handlebars.compile(galleryTemplate),

            initialize : function(options){
                var options = options || {};
                if(typeof options.models === 'undefined'){
                    throw new Error("models required");
                }
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

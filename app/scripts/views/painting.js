define(["jquery","underscore", "backbone", "handlebars"],function($,_,Backbone,Handlebars){

    var Painting = Backbone.View.extend({

        tagName : "li",
        className : "tableau",

        initialize : function(options){
            if(typeof this.model === 'undefined'){
                throw new Error("Model required");
            }

            require(["text!" + this.model.get("template")], _.bind(function(template){
                this.template = Handlebars.compile(template); 
                this.render();
            },this));
        },

        render : function(){
            if(typeof this.template !== 'undefined'){
                $(this.el).html(this.template());
            }
            return this.el;
        }

    });

    return {
        Painting : Painting,
        
        create : function(model){
            return new Painting({ model : model });         
        }
    };
});
define(["underscore","backbone","models/painting"],function(_,Backbone,Painting){

    var Gallery = Backbone.View.extend({});

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
});

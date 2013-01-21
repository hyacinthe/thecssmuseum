(function(defaultDataPath){
    define(["jquery","json","underscore","models/painting"],function($,JSON,_,Painting){
        return {
            get : function(dataPath) {
                var dfd = $.Deferred();
                require(["text!" + (dataPath || defaultDataPath)], function(data){

                    data = JSON.parse(data);

                    var paintings = [];

                    _.each(data.art,function(a){

                        a.template = data.base + a.template;

                        paintings.push(
                            new Painting(a)
                        );
                    });

                    dfd.resolve(paintings);
                });
                return dfd.promise();
            }
        };
    });
})("data/gallery.json")

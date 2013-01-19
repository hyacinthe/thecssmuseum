(function(defaultDataPath){
    define(["jquery","json"],function($,JSON){
        return {
            get : function(dataPath) {
                var dfd = $.Deferred();
                require(["text!" + (dataPath || defaultDataPath)], function(data){
                    dfd.resolve(JSON.parse(data));
                });
                return dfd.promise();
            }
        };
    });
})("data/gallery.json")
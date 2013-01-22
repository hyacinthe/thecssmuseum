(function(window,document){

    require.config({
      shim: {
        'underscore' : { exports : '_' },
        'backbone' : { deps : ['underscore'], exports : 'Backbone' },
        'handlebars' : { exports : 'Handlebars' },
        'json' : { exports : 'JSON' }
      },

      paths: {
        'jquery': 'vendor/jquery.min',
        'underscore': 'vendor/underscore',
        'backbone': 'vendor/backbone',
        'handlebars': 'vendor/handlebars',
        'json': 'vendor/json2',
        'text': 'vendor/text',
        'models': 'models',
        'views' : 'views',
        'data': '../data',
        'templates' : '../templates'
      }
    });

    require(['jquery', 'app'], function($,App) {

        function testing(){
            return $("#mocha").length !== 0;
        }

        if(!testing()){
            $(document).ready(function(){
                App.run();
            });
        }

    });

})(window,document);

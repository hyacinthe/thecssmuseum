require.config({
  shim: {
    'underscore' : { exports : '_' },
    'backbone' : { deps : ['underscore'], exports : 'Backbone' },
    'handlebars' : { exports : 'Handlebars' },
  },

  paths: {
    'jquery': 'vendor/jquery.min',
    'underscore': 'vendor/underscore',
    'backbone': 'vendor/backbone',
    'handlebars': 'vendor/handlebars',
    'text': 'vendor/text'
  }
});
 
require(['jquery'], function($) {
    $(document).ready(function(){
        $("#down > h3 > a").on("mouseover", function(){
            var marginset = $(".tableau").css("margin-right").replace(/[^-\d\.]/g, '');
            var posgall = $("#gallery").css("margin-left").replace(/[^-\d\.]/g, '');
            var n = posgall -500 - marginset;
            $("#gallery").css("margin-left", n);
        });
    });
});
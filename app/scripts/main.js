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
    'data': '../data'
  }
});

require(['app'], function(App) {
    App.run();
});

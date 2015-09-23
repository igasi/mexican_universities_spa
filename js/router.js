// Filename: router.js
define([
    'jquery',
    'jst',
    'underscore',
    'backbone',
    //Add here viewsApp
    'views/states/StatesListView',

], function($, JST, _, Backbone, StatesListView) {

    var AppRouter = Backbone.Router.extend({

        routes: {
            //home
            '': 'states',

            // Default
            '*actions': 'defaultAction'
        },

        initialize: function( config ){
            this.config = config;
        },


    });


    var initialize = function(){

        var app_router = new AppRouter;

        app_router.on('route:states', function(){

            // Call render on the module we loaded in via the dependency array
            console.log('Init Router default');
            var statesView = new StatesListView();
            statesView.render();

        });

        app_router.on('route:defaultAction', function (actions) {

            // We have no matching route, lets display the home page

        });

        // Unlike the above, we don't call render on this view as it will handle
        // the render call internally after it loads data. Further more we load it
        // outside of an on-route function to have it loaded no matter which page is
        // loaded initially.
        //var footerView = new FooterView();

        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});
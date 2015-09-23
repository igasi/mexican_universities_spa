// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    //Add here viewsApp

], function($, _, Backbone, HomeView, ProjectsView, ContributorsView, FooterView) {

    var AppRouter = Backbone.Router.extend({

        //Default configuration settings
        config:  {
            //Config base URL for access to REST API
            "base_url": "http://45.55.24.20/",
            //Define debug mode
            "debug": false,
        },

        routes: {
            //home
            '': 'function',

            // Default
            '*actions': 'defaultAction'
        },

        initialize: function( config ){
            this.config = config;
        },


    });


    var initialize = function(){

        var app_router = new AppRouter;

        app_router.on('route:', function(){

            // Call render on the module we loaded in via the dependency array
            //var projectsView = new ProjectsView();
            //projectsView.render();

        });

        app_router.on('route:defaultAction', function (actions) {

            // We have no matching route, lets display the home page
            //var homeView = new HomeView();
            //homeView.render();
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
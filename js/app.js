// Filename: app.js
define([
    'jquery',
    'underscore',
    'backbone',
    'router', // Request router.js
], function($, _, Backbone, Router){
    var initialize = function(){

        // Custom Options
        var config = {
            //Config base URL for access to REST API
            "base_url": "http://45.55.24.20/",
            //Define debug mode
            "debug": true,
        };

        // Pass in our Router module and call it's initialize function
        Router.initialize(config);

    };

    return {
        initialize: initialize
    };
});
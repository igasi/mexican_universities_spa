// Filename: app.js
define([
    'jquery',
    'jst',
    'underscore',
    'backbone',
    'router', // Request router.js
], function($, JST, _, Backbone, Router){
    var initialize = function(){

        // Pass in our Router module and call it's initialize function
        Router.initialize();

    };

    return {
        initialize: initialize,
    };
});
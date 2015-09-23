// Author: igasi <isaac.gasi@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
    paths: {
        jquery: 'vendor/jquery/dist/jquery.min',
        jst: 'vendor/lodash/lodash.min',
        underscore: 'vendor/underscore/underscore-min',
        backbone: 'vendor/backbone/backbone-min',
        templates: 'templates'
    }

});

require([
    // Load our app module and pass it to our definition function
    'app',

], function(App){
    console.log("Init");
    // The "app" dependency is passed in as "App"
    // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
    App.initialize();
});
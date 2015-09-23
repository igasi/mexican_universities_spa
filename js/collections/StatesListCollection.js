define([
    'jst',
    'underscore',
    'backbone',
    'models/StateModel'
], function(JST, _, Backbone, StateModel){

    var StatesListCollection = Backbone.Collection.extend({

        model: StateModel,

        initialize: function(models, options){},

        url: function(){
            console.log("Reading URL on StatesListcollection");


            return 'http://45.55.24.20/rest/states/all';
        }

    });

    return StatesListCollection;

});
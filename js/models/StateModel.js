define([
    'jst',
    'underscore',
    'backbone',
], function(JST, _, Backbone) {

    var StateModel = Backbone.Model.extend({

        // Default attributes
        defaults: {
            "name": "None",
            "description__value": "None",
            "tid": -1,
            "count_universities": "None",
            "field_photo": "None"
        }

    });

    return StateModel;

});
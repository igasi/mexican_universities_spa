define([
    'jst',
    'underscore',
    'backbone',
    'models/StateModel'
], function(JST, _,Backbone, StateModel){

    var StateView = Backbone.View.extend({

        tagName: 'div',
        className: 'state',
        template: JST['templates/state.ejs'],

        events: {
            'click .state': 'showUniversities',
        },

        render: function() {
            //this.el is what we defined in tagName. use $el to get access to jQuery html() function
            this.$el.html( this.template( this.model.toJSON() ) );
            return this;
        },

        showUniversities: function() {

        },

    });

    return StateModel;

});
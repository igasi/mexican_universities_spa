define([
    'jst',
    'underscore',
    'backbone',
    'collections/StatesListCollection',
    'views/states/StateView',
    'models/StateModel'
], function(JST, _, Backbone, StatesListCollection, StateView, StateModel){

    var StatesListView = Backbone.View.extend({

        el: '#states-list',

        initialize: function() {

            console.log("Init StatesListView");

            this.collection = new StatesListCollection();
            this.collection.fetch({ dataType: "jsonp" });

            console.log(this.collection);

            this.render();

            this.collection.on('reset', this.render, this);

        },

        //events: {
            //'event selector': 'function',
        //},

        render: function() {
            var self = this;

            $(this.el).empty();
            _.each(this.collection.models, function(state) {
                self.renderState(state);
            }, this);

        },

        renderState: function( state ) {
            var stateView = new StateView({
                model: state
            });
            this.$(el).append( stateView.render().el );
        },

    });

    return StatesListView;


});
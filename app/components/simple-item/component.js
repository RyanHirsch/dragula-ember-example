import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'li',
    registerWithContainer: Ember.on('didInsertElement', function() {
        this.registerItem({
            element: this.$()[0],
            component: this
        });
    })
});

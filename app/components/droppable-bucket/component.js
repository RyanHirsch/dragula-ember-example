import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
    value: null,
    items: [],
    filteredItems: computed('items.@each.bucket', function () {
        return this.get('items').filterBy('bucket', this.get('value'));
    }),
    didInsertElement() {
        this.registerContainer({
            element: this.$('ul')[0],
            component: this
        });
    }
});

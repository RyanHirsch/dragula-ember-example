import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
    value: null,
    items: [],
    filteredItems: computed(function () {
        return this.get('items').filterBy('bucket', this.get('value'));
    }),
    didInsertElement() {
        this.registerContainer(this.$('ul')[0]);
    }
});

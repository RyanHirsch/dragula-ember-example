import Ember from 'ember';

export default Ember.Component.extend({
    drake: null,
    willInsertElement() {
        this.set('drake', window.dragula());
    },
    didInsertElement() {
        this.get('drake').containers.push(this.$('ul')[0]);
        this.get('drake').containers.push(this.$('ul')[1]);
        this.get('drake').on('drop', (item, target, source) => {
            console.log('dropped');
        });
    }
});

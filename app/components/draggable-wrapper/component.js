import Ember from 'ember';

export default Ember.Component.extend({
    drake: null,
    registeredItems: [],
    registeredBuckets: [],
    willInsertElement() {
        this.set('drake', window.dragula());
    },
    didInsertElement() {
        this.get('drake').on('drop', (itemElement, targetElement, sourceElement) => {
            let item = this.get('registeredItems').findBy('element', itemElement);
            let target = this.get('registeredBuckets').findBy('element', targetElement);
            let source = this.get('registeredBuckets').findBy('element', sourceElement);

            console.log('dropped', item);
            if(target !== source) {
                item.component.set('item.bucket', target.component.get('value'));
            }
        });
    },
    actions: {
        register(item) {
            console.log('registering bucket', item);
            this.registeredBuckets.pushObject(item);
            this.get('drake').containers.push(item.element);
        },
        registerItem(item) {
            console.log('registering element', item);
            this.registeredItems.pushObject(item);
        }
    }
});

import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [
            { title: 'Foo', bucket: '1' },
            { title: 'Bar', bucket: '1' },
            { title: 'Baz', bucket: '1' },
            { title: 'Quxx', bucket: '1' }
        ];
    }
});

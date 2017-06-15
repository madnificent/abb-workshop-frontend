import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service('store'),

  model( { event_id } ) {
    return this.get('store').find('event', event_id);
  }
});

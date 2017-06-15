import DS from 'ember-data';

export default DS.Model.extend({
  created: DS.attr('string'),
  modified: DS.attr('string'),
  country: DS.attr('string'),
  locality: DS.attr('string'),
  postalCode: DS.attr('string'),
  streetAddress: DS.attr('string')
});

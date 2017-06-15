import DS from 'ember-data';

export default DS.Model.extend({
  created: DS.attr('string'),
  modified: DS.attr('string'),
  name: DS.attr('string'),
  isWheelchairUnfriendly: DS.attr('boolean'),
  address: DS.belongsTo('address')
});

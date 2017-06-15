import DS from 'ember-data';

export default DS.Model.extend({
  isWheelchairFriendly: DS.attr('boolean'),
  name: DS.attr(),
  description: DS.attr(),
  endDate: DS.attr('date'),
  language: DS.attr(),
  free: DS.attr('boolean'),
  keywords: DS.attr(),
  url: DS.attr(),
  duration: DS.attr(),
  frequency: DS.attr(),
  typicalAgeRange: DS.attr(),
  isPartOf: DS.attr(),
  event: DS.belongsTo('event'),
  themes: DS.hasMany('theme'),
  location: DS.belongsTo('location'),
  contactPoint: DS.belongsTo('contact-point'),
  organizer: DS.belongsTo('organizer')
});

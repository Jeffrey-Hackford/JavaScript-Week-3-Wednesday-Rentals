import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import DS from 'ember-data';

export default Model.extend({
  owner: attr(),
  city: DS.belongsTo('city', {async: true}),
  type: attr(),
  image: attr(),
  bedrooms: attr()
});

import Ember from 'ember';

export default Ember.Component.extend({
  addNewCity: false,
  actions: {
    cityFormShow() {
      this.set('addNewCity', true);
    },
    // form shows
    save1() {
      var params = {
        name: this.get('name'),
        state: this.get('state'),
        country: this.get('country'),
      };
      // form hides again...
      this.set('addNewCity', false);
      this.sendAction('save2', params);
      this.set('name', "");
      this.set('state', "");
      this.set('country', "");
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  addNewCity: false,
  actions: {
    cityFormShow() {
      this.set('addNewCity', true);
    },
    save1() {
      var params = {
        name: this.get('name') ? this.get('name') : "",
        state: this.get('state') ? this.get('state') : "",
        country: this.get('country') ? this.get('country') : ""
      };
      this.set('addNewCity', false);
      this.sendAction('save2', params);
      this.set('name', "");
      this.set('state', "");
    }
  }
});

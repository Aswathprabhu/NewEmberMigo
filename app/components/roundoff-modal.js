import Component from '@ember/component';

export default Component.extend({
  didRender()
    {
      this._super(...arguments);
      this.send('initializeModal');
    },
    actions:{
      initializeModal(){
      $('.modal').modal({
        dismissible: false
    });
  }
}
});

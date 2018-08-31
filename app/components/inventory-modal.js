import Component from '@ember/component';
import $ from 'jquery';

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
    $('.datepicker').datepicker({
       format: 'yyyy-mm-dd'
   });
    $('.datepicker-date-display').hide();
  
      }
    }
});

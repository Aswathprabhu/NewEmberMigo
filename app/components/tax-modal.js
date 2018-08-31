import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  gstTaxes:["GST0 [0]","GST12 [12]","GST18 [18]","GST28 [28]","GST5 [5]"],
  igstTaxes:["IGST0 [0]","IGST12 [12]","IGST18 [18]","IGST28 [28]","IGST5 [5]"],
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
     $('select').formSelect();
  }
}

});

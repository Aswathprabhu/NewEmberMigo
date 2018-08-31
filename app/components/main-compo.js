import Component from '@ember/component';
import {inject as service} from '@ember/service';
import {
  set
} from '@ember/object';
import $ from 'jquery';
export default Component.extend({
  storage:service(),
  errorList:null,
  module:null,
  
  didReceiveAttrs() {
    this._super(...arguments);
    var moduleObjo=this.storage.get('moduleNamesMap').filterBy("name",this.get('module_name'));
    this.set('module',moduleObjo);
    this.set('errorObjo',this.get('storage').get('errorObjo'));
 },




  actions: {
  setModule()
  {



  },
  showErrorView() {

    $("#swipe-1").removeClass("hide");
    $("#swipe-2").removeClass("activate");
    $("#DataView").removeClass("activate");
    $("#swipe-1").addClass("activate");
    $("#ErrorView").addClass("activate");
    $("#swipe-2").addClass("hide");
    },

  showDataView() {
    $("#swipe-2").removeClass("hide");
    $("#swipe-1").removeClass("activate");
    $("#ErrorView").removeClass("activate");
    $("#DataView").addClass("activate");
    $("#swipe-1").addClass("hide");
    $("#swipe-2").addClass("activate");

  },
  displayJson(key,currentModuleName)
  {

    this.get('module').forEach((res)=>{
      for(var i in res)
      {
        if(i=="errors")
        {
          let errors=res[i];
          for(var error in errors)
          {
           for(var bug=0;bug<errors[error].length;bug++)
            {
              if(errors[error][bug]['key']===key)
              errors[error].removeObject(errors[error][bug]);
            }
          }
        }
      }
      console.log(this.get('module'));
      return set(res,'success',res.success+1),set(res,'failure',res.failure-1);
    });

  }

}
});

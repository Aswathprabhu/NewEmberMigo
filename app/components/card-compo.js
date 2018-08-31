import Component from '@ember/component';

export default Component.extend({
totalChecker:true,
 didRender()
 {
   this._super(...arguments);
   if(this.get('total')===null)
   {

     this.set('totalChecker',false);
   }
 },
 actions:{
   nextModule(){

   }
 }
});

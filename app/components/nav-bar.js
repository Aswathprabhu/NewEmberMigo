import Component from '@ember/component';

export default Component.extend({
  init()
    {
  this._super(...arguments);
  this.set('orgInfo',this.get('storage').get('orgName')+" ("+this.get('storage').get('orgId')+")");
    }
});

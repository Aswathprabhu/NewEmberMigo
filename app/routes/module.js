import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default Route.extend({
  storage:service(),
  model(params)
  {
    
    return params;
  },


});

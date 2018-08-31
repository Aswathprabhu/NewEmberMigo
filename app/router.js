import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('migrations');
  this.route('module',{path:'migrations/:migration_id'});
  this.route('afterimport');
});

export default Router;

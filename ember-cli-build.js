'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    svg: {
      paths: [
       'app/svgs'
      ]
    },

    // Add options here
    storeConfigInMeta: false,

    'ember-bootstrap': {
      'bootstrapVersion': 4,
      'importBootstrapFont': false,
      'importBootstrapCSS': true
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  app.import('node_modules/tachyons/css/tachyons.min.css');
  app.import('node_modules/materialize-css/dist/css/materialize.min.css');
  app.import('node_modules/materialize-css/dist/js/materialize.min.js');
  app.import('node_modules/animate.css/animate.min.css');

  return app.toTree();
};
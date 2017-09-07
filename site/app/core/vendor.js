module.exports = () => {
  require('animate.css/animate.css');
  require('angular-material/angular-material.css');
  require('../index.scss');

  require('angular');
  require('angular-animate');
  require('angular-sanitize');
  require('angular-scroll');
  require('angular-ui-router');
  require('angular-material');
  require('angular-aria');
  require('ngtouch');
  // polyfills
  require('../polyfills/es2015_ArrayPrototype_find');
};

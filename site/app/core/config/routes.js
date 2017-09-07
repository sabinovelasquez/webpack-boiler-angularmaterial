export default ngModule => {
  ngModule.config(
    ($stateProvider, $urlRouterProvider, $mdThemingProvider) => {
      $mdThemingProvider.theme('default')
        .primaryPalette('pink')
        .accentPalette('indigo');
      $urlRouterProvider.otherwise('/');
      $stateProvider
        .state('main', {
          url: '/',
          template: require('../main/main/main.pug'),
          controller: 'MainCtrl',
          controllerAs: 'main',
        });
    }
  );
};

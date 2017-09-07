export default ngModule => {
  ngModule.config(
    ($stateProvider, $urlRouterProvider) => {
      $urlRouterProvider.otherwise('/');
      $stateProvider
      .state('main', {
        url: '/',
        template: require('../main/main.pug'),
        controller: 'MainCtrl',
        controllerAs: 'main',
      });
    }
  );
};

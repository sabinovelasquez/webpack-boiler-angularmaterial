export default ngModule => {
  require('./sidenav.scss');

  ngModule.directive('sideNav', function sideNav() {
    return {
      template: require('./sidenav.pug'),
      scope: {},
      controllerAs: 'sideNav',
      controller: function sideNavCtrl() {
        this.whiteframe = '1';
      },
    };
  });
};

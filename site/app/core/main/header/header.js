export default ngModule => {
  require('./header.scss');

  ngModule.directive('mainHeader', function mainHeader() {
    return {
      template: require('./header.pug'),
      scope: {},
      controllerAs: 'header',
      controller: function mainHeaderCtrl() {
        this.parallaxBg = 'img/header.jpg';
      },
    };
  });
};

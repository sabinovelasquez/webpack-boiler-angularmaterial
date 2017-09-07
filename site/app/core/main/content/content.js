export default ngModule => {
  require('./content.scss');

  ngModule.directive('content', function content() {
    return {
      template: require('./content.pug'),
    };
  });
};

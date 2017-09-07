export default ngModule => {
  require('./main/nav/nav')(ngModule);
  require('./main/content/content')(ngModule);
  require('./main/sidenav/sidenav')(ngModule);
};

export default ngModule => {
  require('./main/header/header')(ngModule);
  require('./main/nav/nav')(ngModule);
  require('./main/footer/footer')(ngModule);
};

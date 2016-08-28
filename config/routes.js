module.exports.routes = {

  // HTML Views
  '/': { view: 'homepage' },
  'get /login': { view: 'user/login' },
  'get /signup': { view: 'user/signup' },
  '/welcome': { view: 'user/welcome' },
  '/search': { view: 'user/result' },
  // Endpoints
  'post /signup': 'UserController.search',
  'post /search': 'UserController.search',
  'post /login': 'UserController.login',

  '/logout': 'UserController.logout',
};

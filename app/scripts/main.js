(function () {

  angular.module('', ['ngRoute']).constant('PARSE_HEADERS', {
    headers: {
    "X-Parse-Application-Id: itgnj31wh8MQhIxiy6OQwFWOlzeVWZt56SipOGe8",
    "X-Parse-REST-API-Key: SGRofGlAL5zgOStCjRsdhrVbQKetIzmjIFqz1RaM",
    "Content-Type: application/json"
  }
  })

  .constant('PARSE_URI', 'https://api.parse.com/1/')
  .config( function ($routeProvider) {


    $routeProvider.when('/', {
      templateUrl: 'scripts/users/login.tpl.html',
      controller: 'User'
    }).when('/list', {
      templateUrl: 'scripts/standups/list.tpl.html',
      controller: 'List'
    }).otherwise({
      templateUrl: 'scripts/users/login.tpl.html',
      controller: 'User'
    })

  })

  });

}());

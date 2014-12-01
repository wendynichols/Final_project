(function () {

  angular.module('myApp')
  .controller('User', ['UserFactory', '$scope',
  function (UserFactory, $scope) {


    $scope.login = function (user) {
      UserFactory.login(user);
    };

    $scope.logout = function () {
      UserFactory.logout();
    };

  }
  ]);

}());

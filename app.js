var app = angular.module('charterChat', ['firebase']);

app.controller('MainCtrl', function($scope, $firebaseArray) {
  var ref = new Firebase("https://charterchatsite.firebaseio.com/");
  $scope.users = $firebaseArray(ref);
  $scope.submissionSuccess = false;

  $scope.addUser = function() {
    $scope.users.$add({
      name: $scope.newName,
      email: $scope.newEmail
    });
    $scope.submissionSuccess = true;
  };
});

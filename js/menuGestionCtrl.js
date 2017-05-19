app.controller('menuGestionCtrl', function($scope, $location){
  var vm = this;

  $scope.go = function ( path ) {
    $location.path( path );
  };
});

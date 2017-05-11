app.controller('menuLateralCtrl', function($scope, misLotes){
  var vm = this;
  vm.seleccionado = $scope.$parent.posicion.nro;
  //Lista de opciones del menu derecho
  vm.sidebarMenu = misLotes.sidebarMenu();
});

app.controller("vendedorCtrl", function($scope, misLotes, $location){
  var vm = this;
  vm.filtroActivo = false;

  vm.tablaVendedorSolicitudes = misLotes.datosVendedorSolicitudes();
  vm.tablaVendedorGrupoSolicitudes = misLotes.datosVendedorGrupoSolicitudes();

  $scope.go = function ( path ) {
    $location.path( path );
  };

  vm.toggleFiltro = function() {
    vm.filtroActivo = !vm.filtroActivo;
  };

});

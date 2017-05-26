app.controller('menuLateralCtrl', function($scope, misLotes){
  var vm = this;
  vm.verPreevaluaciones = false;
  vm.verSolicitudes = false;
  vm.seleccionado = $scope.$parent.posicion.nro;

  // Verifico si tiene subociones y marco la seleccionada
  if ($scope.$parent.interna) {
    vm.subSeleccionado = $scope.$parent.interna.nro;

    if (vm.seleccionado === 4) {
      vm.verSubOpc = true;
      if (vm.subSeleccionado > 3) {
        vm.verPreevaluaciones = true;
        vm.verSolicitudes = false;
      } else {
        vm.verSolicitudes = true;
        vm.verPreevaluaciones = false;
      }
    }
  }

  //OPcion subSupervisor
  vm.cierraSupervisor = function() {
    vm.verSubOpc = !vm.verSubOpc;
    vm.verSolicitudes = false;
    vm.verPreevaluaciones = false;
  };

  //Lista de opciones del menu derecho
  vm.sidebarMenu = misLotes.sidebarMenu();
  vm.subSupervisor = misLotes.subSupervisor();

  // Submenu de Supervisores
  vm.abreSubOpcion = function(opc) {
    if (opc === 'solicitudes') {
      vm.verSolicitudes = !vm.verSolicitudes;
      vm.verPreevaluaciones = false;
    }

    if (opc === 'preevaluaciones') {
      vm.verPreevaluaciones = !vm.verPreevaluaciones
      vm.verSolicitudes = false;
    }
  };
});

app.controller("supervisorCtrl", function($scope, misLotes, $location){
  var vm = this;
  vm.filtroActivo = false;
  vm.opcionSeleccionada = -1;

  //Datos que se van a cargar en la tabla de supervisores
  vm.tablaPreevaluacionesAsignadas = misLotes.datosPreevaluacionesAsignadas();
  vm.tablaSolicitudesAsignadas = misLotes.datosSolicitudesAsignadas();
  vm.tablaSolicitudesSinAsignar = misLotes.datosSolicitudesSinAsignar();
  vm.tablaPreevaluacionesSinAsignar = misLotes.datosPreevaluacionesSinAsignar();
  vm.tablaSolicitudesVerAsignadas = misLotes.datosSolicitudesVerAsignadas();
  vm.tablaSolicitudesAsignadasVendedores = misLotes.datosSolicitudesAsignadasVendedores();

  //Externas
  vm.tablaPreevaluacionesAsignadasExt = misLotes.datosPreevaluacionesAsignadasExt();
  vm.tablaSolicitudesAsignadasExt = misLotes.datosSolicitudesAsignadasExt();
  vm.tablaSolicitudesSinAsignarExt = misLotes.datosSolicitudesSinAsignarExt();
  vm.tablaPreevaluacionesSinAsignarExt = misLotes.datosPreevaluacionesSinAsignarExt();
  vm.tablaSolicitudesVerAsignadasExt = misLotes.datosSolicitudesVerAsignadasExt();

  //Función para abrir el menu Adicional
  vm.abreOpciones = function(index) {
    if (vm.opcionSeleccionada === index){
      vm.opcionSeleccionada = -1;
      return;
    }
    vm.opcionSeleccionada = index;
  };

  $scope.go = function ( path ) {
    $location.path( path );
  };

  vm.toggleFiltro = function() {
    vm.filtroActivo = !vm.filtroActivo;
  };

});

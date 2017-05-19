app.controller("reportesCtrl", function($scope, misLotes){
  var vm = this;
  vm.tipoReporte = 'general';
  //Datos que se van a cargar en la tabla de Reportes
  vm.tablaReportes = misLotes.datosLotesReportes();

  vm.toggleFiltro = function() {
    vm.filtroActivo = !vm.filtroActivo;
  };

});

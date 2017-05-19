app.controller("negociosCtrl", function($scope, misLotes){
  var vm = this;
  //Datos que se van a cargar en la tabla de Entidades
  vm.tablaNegocios = misLotes.datosLotesNegocios();

  //Función para abrir el menu Adicional
  vm.abreOpciones = function(index) {
    if (vm.opcionSeleccionada === index){
      vm.opcionSeleccionada = -1;
      return;
    }
    vm.opcionSeleccionada = index;
  };

  vm.toggleFiltro = function() {
    vm.filtroActivo = !vm.filtroActivo;
  };

});

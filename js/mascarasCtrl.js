app.controller("mascarasCtrl", function($scope, misLotes){
  var vm = this;
  vm.filtroActivo = false;
  vm.opcionSeleccionada = -1;

  //Datos que se van a cargar en la tabla de mascaras
  vm.tablaMascara = misLotes.datosLotesMascaras();

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

app.controller("entidadesCtrl", function($scope, misLotes){
  var vm = this;
  //Datos que se van a cargar en la tabla de Entidades
  vm.tablaEntidades = misLotes.datosLotesEntidades();

  //Función para abrir el menu Adicional
  vm.abreOpciones = function(index) {
    if (vm.opcionSeleccionada === index){
      vm.opcionSeleccionada = -1;
      return;
    }
    vm.opcionSeleccionada = index;
  };

});

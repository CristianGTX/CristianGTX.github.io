app.controller("sucursalesCtrl", function($scope, misLotes){
  var vm = this;

  //Datos que se van a cargar en la tabla de sucursales
  vm.tablaSucursales = misLotes.datosLotesSucursales();

});

app.controller("nuevaMascaraCtrl", function($scope){
  var vm = this;
  vm.abreProducto = false;
  vm.productoCuenta = true;
  vm.tarjetaCredencial = true;
  vm.absorcion = true;
  vm.imprimir = true;
  vm.pedirFoto = true;
  vm.productosUpgrade = true;
  vm.preevaluacion = true;
  vm.persona = true;
  vm.conveniosEspeciales = true;
  vm.conveniosUpgrades = true;
  vm.rangoCapitas = false;

  //Abre opcion de rangos de capitas
  vm.abreRangoCapitas = function() {
    vm.abreUpgrade = false;
    vm.rangoCapitas = true;
  };

  //Abre opcion de rangos de capitas
  vm.abreUpgradeInicio = function() {
    if (vm.rangoCapitas) {
      vm.abreUpgrade = false;
      vm.rangoCapitas = false;
      return;
    }
    vm.abreUpgrade = !vm.abreUpgrade;
    vm.rangoCapitas = false;
  };

});

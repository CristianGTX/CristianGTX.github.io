app.controller("nuevoNegocioCtrl", function($scope){
  var vm = this;
  vm.suscriptor = true;
  vm.interno = false;

  vm.seleccionEntrega = function(sel) {
    vm.domicilioEntrega = sel;
  }

  // Listado de productos
  vm.mascaras = [
    'Sueldo',
    'Honorario',
    'Credenciales con cuenta',
    'Credenciales sin cuenta',
    'Cuenta Seguridad Social (CSS)',
    'Caja de ahorro (ACAH)',
    'Progresar',
    'Asignación Universal por Hijo (UVHI)'
  ];

});

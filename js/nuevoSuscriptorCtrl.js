app.controller("nuevoSuscriptorCtrl", function($scope){
  var vm = this;
  vm.abreSelectorDomicilio = false;

  // Listado de productos
  vm.productos = [
    'Sueldos',
    'Honorarios',
    'Viaticos',
    'Becas',
    'Credenciales con cuenta',
    'Credenciales Alumno',
    'Credenciales Docente',
    'Credenciales No Docente',
    'Credenciales Becario',
    'Credenciales Graduado'
  ];

});

app.controller("nuevoSuscriptorCtrl", function($scope){
  var vm = this;

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

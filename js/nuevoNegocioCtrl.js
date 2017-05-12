app.controller("nuevoNegocioCtrl", function($scope, $location){
  var vm = this;
  vm.suscriptor = true;
  vm.interno = false;

  vm.seleccionUbicacion = function(sel) {
    vm.ubicacionSel = sel;
  }

  $scope.go = function ( path ) {
    $location.path( path );
  };

  //Listado de Ubicaciones
  vm.listaUbicaciones = [
    {
      direccion: 'OBELISCO',
      aproximado: 'Ubicado a 100mts aprox',
      name: 'obelisco'
    },
    {
      direccion: 'PLAZA LAVALLE',
      aproximado: 'Ubicado a 100mts aprox',
      name: 'lavalle'
    },
    {
      direccion: 'DIAGONAL NORTE',
      aproximado: 'Ubicado a 100mts aprox',
      name: 'diagonal'
    },
    {
      direccion: 'TRIBUNALES',
      aproximado: 'Ubicado a 100mts aprox',
      name: 'tribunales'
    },
    {
      direccion: 'CENTRO PORTEÑO',
      aproximado: 'Ubicado a 100mts aprox',
      name: 'portenio'
    },
    {
      direccion: 'MICROCENTRO',
      aproximado: 'Ubicado a 100mts aprox',
      name: 'microcentro'
    },
    {
      direccion: 'PLAZA LIBERTAD',
      aproximado: 'Ubicado a 100mts aprox',
      name: 'libertad'
    },
    {
      direccion: 'VIAMONTE',
      aproximado: 'Ubicado a 100mts aprox',
      name: 'viamonte'
    }
  ];

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

  vm.listaCamposAsignados = [
    {
      id: 'nombreApellido',
      titulo: 'Nombre y apellido',
      activo: true,
      obligatorio: true
    },
    {
      id: 'fechaNacimiento',
      titulo: 'Fecha de nacimiento',
      activo: true,
      obligatorio: true
    },
    {
      id: 'lugarNacimiento',
      titulo: 'Lugar de nacimiento',
      activo: true,
      obligatorio: false
    },
    {
      id: 'nacionalidad',
      titulo: 'Nacionalidad',
      activo: true,
      obligatorio: false
    },
    {
      id: 'tipoNroDocumento',
      titulo: 'Tipo y número de documento',
      activo: true,
      obligatorio: false
    },
    {
      id: 'cuitCuil',
      titulo: 'CUIT/CUIL',
      activo: false,
      obligatorio: false
    },
    {
      id: 'GENERO',
      titulo: 'Género',
      activo: true,
      obligatorio: false
    },
    {
      id: 'LOCALIDAD',
      titulo: 'Localidad',
      activo: true,
      obligatorio: false
    },
    {
      id: 'Provincia',
      titulo: 'provincia',
      activo: true,
      obligatorio: false
    }
  ];

});

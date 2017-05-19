app.controller("entidadNegocioCtrl", function($scope, $location){
  var vm = this;
  vm.opcionSeleccionada = -1;
  vm.suscriptor = true;
  vm.interno = false;

  //Función para abrir el menu Adicional
  vm.abreOpciones = function(index) {
    if (vm.opcionSeleccionada === index){
      vm.opcionSeleccionada = -1;
      return;
    }
    vm.opcionSeleccionada = index;
  };

  vm.seleccionUbicacion = function(sel) {
    vm.ubicacionSel = sel;
  }

  vm.seleccionEntrega = function(sel) {
    vm.domicilioEntrega = sel;
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

  vm.listaCamposAsignados = [
    {
      id: 'nombre',
      titulo: 'Nombre',
      activo: true,
      obligatorio: true
    },
    {
      id: 'Apellido',
      titulo: 'apellido',
      activo: true,
      obligatorio: true
    },
    {
      id: 'ciudadDeNacimiento',
      titulo: 'Ciudad de nacimiento',
      activo: true,
      obligatorio: false
    },
    {
      id: 'fechaNacimiento',
      titulo: 'Fecha de nacimiento',
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
      id: 'tipoDocumento',
      titulo: 'Tipo de documento',
      activo: true,
      obligatorio: false
    },
    {
      id: 'nroDocumento',
      titulo: 'Número',
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
      id: 'EstadoCivil',
      titulo: 'Estado Civil',
      activo: true,
      obligatorio: false
    }
  ];

});

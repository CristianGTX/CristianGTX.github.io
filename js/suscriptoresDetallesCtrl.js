app.controller("suscriptoresDetallesCtrl", function($scope){
  var vm = this;
  vm.opcionSeleccionada = -1;
  vm.suscriptor = true;
  vm.interno = false;
  // Setero con Entidad
  vm.conEntidad = true;

  vm.seleccionEntrega = function(sel) {
    vm.domicilioEntrega = sel;
  }

  //Función para abrir el menu Adicional
  vm.abreOpciones = function(index) {
    if (vm.opcionSeleccionada === index){
      vm.opcionSeleccionada = -1;
      return;
    }
    vm.opcionSeleccionada = index;
  };

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
  ]

});

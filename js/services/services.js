//tabla Lotes
app.service('misLotes', function() {
    var vm = this
    vm.datosLotesMascaras = function() {
        return [
          {
              id : 0,
              mascara : "Sueldos",
              prioridad : 1,
              visibilidad: "Externa",
              asignada: "Si",
              estado: "Activo",
              fechaAlta:"12/12/1990",
              FechaBaja: ""
          },
          {
              id : 1,
              mascara : "Honorarios",
              prioridad : 1,
              visibilidad: "Externa",
              asignada: "No",
              estado: "Activo",
              fechaAlta:"12/12/1990",
              FechaBaja: ""
          },
          {
              id : 2,
              mascara : "Cred. Univ.Doc.",
              prioridad : 2,
              visibilidad: "Externa",
              asignada: "Si",
              estado: "Activo",
              fechaAlta:"12/12/1990",
              FechaBaja: ""
          },
          {
              id : 3,
              mascara : "UVHI",
              prioridad : 3,
              visibilidad: "Externa",
              asignada: "Si",
              estado: "Inhabilitado",
              fechaAlta:"12/12/1990",
              FechaBaja: ""
          }
        ]
    };

    vm.datosPreevaluacionesAsignadas = function() {
        return [
          {
              id : 0,
              zona : 201,
              sucursal : 201,
              empresa: "Avon",
              suscriptor: "15685215",
              cuit: "32-12345687-0",
              altas:"100",
              fechaAlta:"20/02/2017",
              vendedor:"Juan Perez",
              verSolicitudes: true
          },
          {
              id : 1,
              zona : 1,
              sucursal : 1,
              empresa: "Avon",
              suscriptor: "15685215",
              cuit: "32-12345687-0",
              altas:"45",
              fechaAlta:"20/02/2017",
              vendedor:"Mariano Costas",
              verSolicitudes: true
          },
          {
              id : 2,
              zona : 2,
              sucursal : 2,
              empresa: "Garbarino",
              suscriptor: "35489635",
              cuit: "32-12345687-0",
              altas:"577",
              fechaAlta:"20/02/2017",
              vendedor:"Clarisa Nuñez",
              verSolicitudes: true
          },
          {
              id : 3,
              zona : 3,
              sucursal : 3,
              empresa: "Frávega",
              suscriptor: "75896489",
              cuit: "32-12345687-0",
              altas:"100",
              fechaAlta:"20/02/2017",
              vendedor:"Emiliano Suárez",
              verSolicitudes: true
          },
          {
              id : 4,
              zona : 4,
              sucursal : 4,
              empresa: "Farmacity",
              suscriptor: "325897613",
              cuit: "32-12345687-0",
              altas:"1000",
              fechaAlta:"20/02/2017",
              vendedor:"José Rodriguez",
              verSolicitudes: true
          }
        ]
    };

    vm.datosSolicitudesAsignadas = function() {
        return [
          {
              id : 0,
              zona : 201,
              sucursal : 201,
              empresa: "Avon",
              suscriptor: "15685215",
              cuit: "32-12345687-0",
              altas:"100",
              fechaAlta:"20/02/2017",
              vendedor:"Juan Perez",
              verSolicitudes: true
          },
          {
              id : 1,
              zona : 1,
              sucursal : 1,
              empresa: "Avon",
              suscriptor: "15685215",
              cuit: "32-12345687-0",
              altas:"45",
              fechaAlta:"20/02/2017",
              vendedor:"Mariano Costas",
              verSolicitudes: true
          },
          {
              id : 2,
              zona : 2,
              sucursal : 2,
              empresa: "Garbarino",
              suscriptor: "35489635",
              cuit: "32-12345687-0",
              altas:"577",
              fechaAlta:"20/02/2017",
              vendedor:"Clarisa Nuñez",
              verSolicitudes: true
          },
          {
              id : 3,
              zona : 3,
              sucursal : 3,
              empresa: "Frávega",
              suscriptor: "75896489",
              cuit: "32-12345687-0",
              altas:"100",
              fechaAlta:"20/02/2017",
              vendedor:"Emiliano Suárez",
              verSolicitudes: true
          },
          {
              id : 4,
              zona : 4,
              sucursal : 4,
              empresa: "Farmacity",
              suscriptor: "325897613",
              cuit: "32-12345687-0",
              altas:"1000",
              fechaAlta:"20/02/2017",
              vendedor:"José Rodriguez",
              verSolicitudes: true
          }
        ]
    };

    vm.datosSolicitudesSinAsignar = function() {
        return [
          {
              id : 0,
              zona : 201,
              sucursal : 201,
              empresa: "Avon",
              suscriptor: "15685215",
              cuit: "32-12345687-0",
              altas:"100",
              fechaAlta:"20/02/2017",
              verSolicitudes: true
          },
          {
              id : 1,
              zona : 1,
              sucursal : 1,
              empresa: "Avon",
              suscriptor: "15685215",
              cuit: "32-12345687-0",
              altas:"45",
              fechaAlta:"20/02/2017",
              verSolicitudes: true
          },
          {
              id : 2,
              zona : 2,
              sucursal : 2,
              empresa: "Garbarino",
              suscriptor: "35489635",
              cuit: "32-12345687-0",
              altas:"577",
              fechaAlta:"20/02/2017",
              verSolicitudes: true
          },
          {
              id : 3,
              zona : 3,
              sucursal : 3,
              empresa: "Frávega",
              suscriptor: "75896489",
              cuit: "32-12345687-0",
              altas:"100",
              fechaAlta:"20/02/2017",
              verSolicitudes: true
          },
          {
              id : 4,
              zona : 4,
              sucursal : 4,
              empresa: "Farmacity",
              suscriptor: "325897613",
              cuit: "32-12345687-0",
              altas:"1000",
              fechaAlta:"20/02/2017",
              verSolicitudes: true
          }
        ]
    };

    vm.datosSolicitudesAsignadarVendedores = function() {
      return [
        {
          id : 0,
          nombre : "Luciano",
          apellido : "Rias",
          cuit: "32-32165478-9",
          producto: "Sueldo",
          fechaAlta:"20/02/2017",
          estado:"Sin asignar"
        },
        {
          id : 1,
          nombre : "Veronica",
          apellido : "Lozano",
          cuit: "32-32165478-9",
          producto: "Honorarios",
          fechaAlta:"20/02/2017",
          estado:"Sin asignar"
        },
        {
          id : 2,
          nombre : "Mariana",
          apellido : "Gonzalez",
          cuit: "32-32165478-9",
          producto: "Sueldo",
          fechaAlta:"20/02/2017",
          estado:"Sin asignar"
        },
        {
          id : 3,
          nombre : "Laura",
          apellido : "Diaz",
          cuit: "32-32165478-9",
          producto: "Credencia s/cta",
          fechaAlta:"20/02/2017",
          estado:"Sin asignar"
        },
        {
          id : 4,
          nombre : "Carolina",
          apellido : "Paez",
          cuit: "32-32165478-9",
          producto: "Sueldo",
          fechaAlta:"20/02/2017",
          estado:"Sin asignar"
        },
        {
          id : 5,
          nombre : "Federico",
          apellido : "Garcia",
          cuit: "32-32165478-9",
          producto: "Honorarios",
          fechaAlta:"20/02/2017",
          estado:"Sin asignar"
        }
      ]
    }

    vm.datosPreevaluacionesSinAsignar = function() {
      return [
        {
            id : 0,
            zona : 201,
            sucursal : 201,
            empresa: "Avon",
            suscriptor: "15685215",
            cuit: "32-12345687-0",
            altas:"100",
            fechaAlta:"20/02/2017",
            verSolicitudes: true
        },
        {
            id : 1,
            zona : 1,
            sucursal : 1,
            empresa: "Avon",
            suscriptor: "15685215",
            cuit: "32-12345687-0",
            altas:"45",
            fechaAlta:"20/02/2017",
            verSolicitudes: true
        },
        {
            id : 2,
            zona : 2,
            sucursal : 2,
            empresa: "Garbarino",
            suscriptor: "35489635",
            cuit: "32-12345687-0",
            altas:"577",
            fechaAlta:"20/02/2017",
            verSolicitudes: true
        },
        {
            id : 3,
            zona : 3,
            sucursal : 3,
            empresa: "Frávega",
            suscriptor: "75896489",
            cuit: "32-12345687-0",
            altas:"100",
            fechaAlta:"20/02/2017",
            verSolicitudes: true
        },
        {
            id : 4,
            zona : 4,
            sucursal : 4,
            empresa: "Farmacity",
            suscriptor: "325897613",
            cuit: "32-12345687-0",
            altas:"1000",
            fechaAlta:"20/02/2017",
            verSolicitudes: true
        }
      ]
    };

    vm.datosSolicitudesVerAsignadas = function() {
        return [
          {
              id : 0,
              zona : 201,
              sucursal : 201,
              vendedor:"Ramiro Costas",
              solicitudesPendientes: 100,
              verSolicitudes: true
          },
          {
              id : 1,
              zona : 1,
              sucursal : 1,
              vendedor:"Mariano Costas",
              solicitudesPendientes: 45,
              verSolicitudes: true
          },
          {
              id : 2,
              zona : 2,
              sucursal : 2,
              vendedor:"Clarisa Nuñez",
              solicitudesPendientes: 577,
              verSolicitudes: true
          },
          {
              id : 3,
              zona : 3,
              sucursal : 3,
              vendedor:"Emiliano Suárez",
              solicitudesPendientes: 100,
              verSolicitudes: true
          },
          {
              id : 4,
              zona : 4,
              sucursal : 4,
              vendedor:"José Rodriguez",
              solicitudesPendientes: 1000,
              verSolicitudes: true
          }
        ]
    };

    vm.datosLotesReportes = function() {
        return [
          {
              id : 0,
              mascara : "Preevaluación",
              cuit : "32-12345678-9",
              lote: "123456",
              fechaAlta: "20/02/2017",
              suscriptor: "15685215",
              capitas: 125
          },
          {
              id : 1,
              mascara : "Credencial con cta",
              cuit : "32-12345678-9",
              lote: "123456",
              fechaAlta: "20/02/2017",
              suscriptor: "65834586",
              capitas: 879
          },
          {
              id : 2,
              mascara : "Credencial sin cta",
              cuit : "32-12345678-9",
              lote: "123456",
              fechaAlta: "20/02/2017",
              suscriptor: "35489635",
              capitas: 457
          },
          {
              id : 3,
              mascara : "Sueldo",
              cuit : "32-12345678-9",
              lote: "123456",
              fechaAlta: "20/02/2017",
              suscriptor: "75896489",
              capitas: 627
          },
          {
              id : 4,
              mascara : "Honorarios",
              cuit : "32-12345678-9",
              lote: "123456",
              fechaAlta: "20/02/2017",
              suscriptor: "325897613",
              capitas: 30
          },
          {
              id : 5,
              mascara : "Viáticos",
              cuit : "32-12345678-9",
              lote: "123456",
              fechaAlta: "20/02/2017",
              suscriptor: "325897613",
              capitas: 15
          }
        ]
    };

    vm.datosLotesSucursales = function() {
        return [
          {
              id : 0,
              numero : 862,
              nombre : "central",
              latitud: "asfadf23432343",
              longitud: "asfadf23432343"
          },
          {
              id : 1,
              numero : 262,
              nombre : "central",
              latitud: "asfadf23432343",
              longitud: "asfadf23432343"
          },
          {
              id : 2,
              numero : 862,
              nombre : "central",
              latitud: "asfadf23432343",
              longitud: "asfadf23432343"
          },
          {
              id : 3,
              numero : 565,
              nombre : "central",
              latitud: "asfadf23432343",
              longitud: "asfadf23432343"
          },
          {
              id : 4,
              numero : 462,
              nombre : "central",
              latitud: "asfadf23432343",
              longitud: "asfadf23432343"
          },
          {
              id : 5,
              numero : 1262,
              nombre : "central",
              latitud: "asfadf23432343",
              longitud: "asfadf23432343"
          }
        ]
    };

    vm.datosLotesSuscriptores = function(){
        return [
          {
            id : 0,
            entidad : "AMEX Camapaña 2016-Jun",
            negocio : "Preembozado",
            fechaAlta: "01/01/2017",
            fechaBaja: "-",
            estado: "Activo"
          },
          {
            id : 1,
            entidad : "Asignacion Universal por hijo",
            negocio : "ANSES",
            fechaAlta: "01/01/2017",
            fechaBaja: "-",
            estado: "Activo"
          },
          {
            id : 2,
            entidad : "Base Blockbuster año 2000",
            negocio : "Preevaluación s/ persona",
            fechaAlta: "01/01/2017",
            fechaBaja: "-",
            estado: "Activo"
          },
          {
            id : 3,
            entidad : "Fiat auto plan  - Rosario",
            negocio : "PAS",
            fechaAlta: "01/01/2017",
            fechaBaja: "-",
            estado: "Activo"
          },
          {
            id : 4,
            entidad : "Fiat auto plan - CABA",
            negocio : "PAS",
            fechaAlta: "01/01/2017",
            fechaBaja: "-",
            estado: "Activo"
          },
          {
            id : 5,
            entidad : "Garbarino",
            negocio : "Pas",
            fechaAlta: "01/01/2017",
            fechaBaja: "-",
            estado: "Inhabilitado"
          },
          {
            id : 6,
            entidad : "Ministerio de relaciones Extreriores",
            negocio : "Colectivos",
            fechaAlta: "01/01/2017",
            fechaBaja: "-",
            estado: "Activo"
          },
          {
            id : 7,
            entidad : "UADE - Docenter(cred)",
            negocio : "Universidades",
            fechaAlta: "01/01/2017",
            fechaBaja: "-",
            estado: "Inhabilitado"
          },
        ]
    };

    vm.datosLotesEntidades = function(){
        return [
          {
            id : 0,
            entidad : "AMEX Camapaña 2016-Jun",
            cuit : "32-12345678-0",
            fechaAlta: "01/01/2017",
            fechaBaja: "-",
            suscriptores: 123,
            estado: "Activo"
          },
          {
            id : 1,
            entidad : "Asignacion Universal por hijo",
            cuit : "32-12345678-0",
            fechaAlta: "01/01/2017",
            fechaBaja: "-",
            suscriptores: 123,
            estado: "Activo"
          },
          {
            id : 2,
            entidad : "Base Blockbuster año 2000",
            cuit : "32-12345678-0",
            fechaAlta: "01/01/2017",
            fechaBaja: "-",
            suscriptores: 123,
            estado: "Activo"
          },
          {
            id : 3,
            entidad : "Fiat auto plan  - Rosario",
            cuit : "32-12345678-0",
            fechaAlta: "01/01/2017",
            fechaBaja: "-",
            suscriptores: 123,
            estado: "Activo"
          },
          {
            id : 4,
            entidad : "Fiat auto plan - CABA",
            cuit : "32-12345678-0",
            fechaAlta: "01/01/2017",
            fechaBaja: "-",
            suscriptores: 123,
            estado: "Activo"
          },
          {
            id : 5,
            entidad : "Garbarino",
            cuit : "32-12345678-0",
            fechaAlta: "01/01/2017",
            fechaBaja: "-",
            suscriptores: 123,
            estado: "Activo"
          },
          {
            id : 6,
            entidad : "Ministerio de relaciones Extreriores",
            cuit : "32-12345678-0",
            fechaAlta: "01/01/2017",
            fechaBaja: "01/01/2018",
            suscriptores: 123,
            estado: "Inhabilitado"
          }
        ]
    };

    vm.datosLotesNegocios = function(){
        return [
          {
            id : 0,
            negocio : "ANSES",
            entidades : 862,
            suscriptores: 1201,
            estado: "Activo"
          },
          {
            id : 1,
            negocio : "Plan de aceditación de sueldos",
            entidades : 262,
            suscriptores: 999,
            estado: "Activo"
          },
          {
            id : 2,
            negocio : "Universidades",
            entidades : 862,
            suscriptores: 1201,
            estado: "Activo"
          },
          {
            id : 3,
            negocio : "Convenios",
            entidades : 565,
            suscriptores: 1256,
            estado: "Activo"
          },
          {
            id : 4,
            negocio : "PreembozadosMonoproductos",
            entidades : 462,
            suscriptores: 1601,
            estado: "Activo"
          },
          {
            id : 5,
            negocio : "Preevaluación sin producto",
            entidades : 1262,
            suscriptores: 1333,
            estado: "Activo"
          }
        ]
    };

    //MENU PRINCIPAL DE LA APLICACIÓN
    vm.listaMenu = function(){
        return ['Inicio',
                'Cambiar empresa',
                'Ver cuenta personal',
                'Claves y usuarios',
                'Certificado digital',
                'Mensajes y avisos',
                'Contáctenos',
                'Tutoriales',
                'Salir']
    };

    //MENU LATERAL DERECHO
    vm.sidebarMenu = function(){
        return [
          {
            titulo: 'Negocios',
            cantidad: 10,
            link: '#/negocios'
          },
          {
            titulo: 'Mascaras',
            cantidad: 100,
            link: '#/mascaras'
          },
          {
            titulo: 'Entidades',
            cantidad: 10,
            link: '#/entidades'
          },
          {
            titulo: 'Suscriptores',
            cantidad: 356789,
            link: '#/suscriptores'
          },
          {
            titulo: 'Supervisor',
            cantidad: 3,
            link: '#/supervisor'
          }
        ]
    };

    //SUBMENU DE SUPERVISORES
    vm.subSupervisor  = function(){
        return [
        {
          titulo: 'Solicitudes',
          link: '#/solicitudes',
          subopciones: [
            {
              titulo: 'Sin asignar',
              link: '#/entidades'
            },
            {
              titulo: 'Asignadas',
              link: '#/suscriptores'
            },
            {
              titulo: 'Ver asignaciones',
              link: '#/suscriptores'
            }
          ]
        },
        {
          titulo: 'Preevalucaiones',
          link: '#/preevaluaciones',
          subopciones: [
            {
              titulo: 'Sin asignar',
              link: '#/entidades'
            },
            {
              titulo: 'Asignadas',
              link: '#/suscriptores'
            }
          ]
        }
      ]
    };

});

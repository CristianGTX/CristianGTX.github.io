var app = angular.module("app", ['ngRoute']);

app.controller('mainCtrl', function($scope, misLotes){
	var vm = this;
  vm.menuPrincipal = misLotes.listaMenu();
	vm.menuConSeparadores = [];
	vm.menuPrincipal.forEach(function(item, index) {
		vm.menuConSeparadores.push(item);
		if (vm.menuPrincipal.length > index + 1) vm.menuConSeparadores.push('|');
	});
});

app.config(function($routeProvider,$locationProvider){
    $locationProvider.html5Mode(false).hashPrefix('');
    $routeProvider
      .when("/", {
        templateUrl: "templates/mascaras.html",
        controller: "mascarasCtrl as vm"
      })
      .when("/nuevaMascara", {
        templateUrl: "templates/nuevaMascara.html",
        controller: "nuevaMascaraCtrl as vm"
      })
			.when("/suscriptores", {
				templateUrl: "templates/suscriptores.html",
				controller: "suscriptoresCtrl as vm"
			})
			.when("/nuevoSuscriptor", {
				templateUrl: "templates/nuevoSuscriptor.html",
				controller: "nuevoSuscriptorCtrl as vm"
			})
			.when("/suscriptoresDetalles", {
				templateUrl: "templates/suscriptoresDetalles.html",
				controller: "suscriptoresDetallesCtrl as vm"
			})
			.when("/entidades", {
				templateUrl: "templates/entidades.html",
				controller: "entidadesCtrl as vm"
			})
      .when("/entidadNegocioDetalle/mascaras", {
				templateUrl: "templates/entidadNegocioDetalle/mascaras.html",
				controller: "entidadNegocioCtrl as vm"
			})
			.when("/entidadNegocioDetalle/configuracionGeneral", {
        templateUrl: "templates/entidadNegocioDetalle/configuracionGeneral.html",
        controller: "entidadNegocioCtrl as vm"
      })
      .when("/entidadNegocioDetalle/configuracionGeneralAC", {
				templateUrl: "templates/entidadNegocioDetalle/configuracionGeneralAC.html",
				controller: "entidadNegocioCtrl as vm"
			})
      .when("/entidadNegocioDetalle/configuracionGeneralSR", {
        templateUrl: "templates/entidadNegocioDetalle/configuracionGeneralSR.html",
        controller: "entidadNegocioCtrl as vm"
      })
			.when("/nuevoNegocioPasoUno", {
				templateUrl: "templates/nuevoNegocioPasoUno.html",
				controller: "nuevoNegocioCtrl as vm"
			})
			.when("/nuevoNegocioPasoDos", {
				templateUrl: "templates/nuevoNegocioPasoDos.html",
				controller: "nuevoNegocioCtrl as vm"
			})
			.when("/nuevoNegocioPasoTres", {
				templateUrl: "templates/nuevoNegocioPasoTres.html",
				controller: "nuevoNegocioCtrl as vm"
			})
      .when("/negocios", {
				templateUrl: "templates/negocios.html",
				controller: "negociosCtrl as vm"
			})
      .when("/negociosDetalles", {
        templateUrl: "templates/negociosDetalles.html",
        controller: "negociosDetallesCtrl as vm"
      })
			.when("/supervisor/asignadasPreevaluaciones", {
        templateUrl: "templates/supervisor/asignadasPreevaluaciones.html",
        controller: "supervisorCtrl as vm"
      })
			.when("/supervisor/sinAsignarPreevaluaciones", {
				templateUrl: "templates/supervisor/sinAsignarPreevaluaciones.html",
				controller: "supervisorCtrl as vm"
			})
      .when("/supervisor/asignadasSolicitudes", {
				templateUrl: "templates/supervisor/asignadasSolicitudes.html",
				controller: "supervisorCtrl as vm"
			})
      .when("/supervisor/sinAsignarSolicitudes", {
        templateUrl: "templates/supervisor/sinAsignarSolicitudes.html",
        controller: "supervisorCtrl as vm"
      })
			.when("/supervisor/verAsignacionesSolicitudes", {
        templateUrl: "templates/supervisor/verAsignacionesSolicitudes.html",
        controller: "supervisorCtrl as vm"
      })
			.when("/supervisor/asignarVendedorSolicitudes", {
				templateUrl: "templates/supervisor/asignarVendedorSolicitudes.html",
				controller: "supervisorCtrl as vm"
			})
			.when("/supervisor/reasignarVendedorSolicitudes", {
				templateUrl: "templates/supervisor/reasignarVendedorSolicitudes.html",
				controller: "supervisorCtrl as vm"
			})
      .when("/reportes", {
        templateUrl: "templates/reportes.html",
        controller: "reportesCtrl as vm"
      })
      .when("/sucursales", {
        templateUrl: "templates/sucursales.html",
        controller: "sucursalesCtrl as vm"
      })
      .otherwise({
        redirectTo: '/'
    });
});

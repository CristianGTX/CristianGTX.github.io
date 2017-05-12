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
			.when("/entidadNegocio", {
				templateUrl: "templates/entidadNegocio.html",
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
      .otherwise({
        redirectTo: '/'
    });
});

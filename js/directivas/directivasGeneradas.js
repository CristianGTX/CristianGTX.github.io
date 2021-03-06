app.directive('menuLateral', function() {
  return {
    restrict : 'AE',
    templateUrl: '../templates/menuLateral.html',
    scope : {
      externa : "=tipo",
      posicion : "=index",
      interna : "=opcion"
    }
  };
});

app.directive('menuGestion', function() {
  return {
    restrict : 'AE',
    templateUrl: '../templates/menuGestion.html',
    scope : {
      seleccion : "=index"
    }
  };
});

app.directive('menuUsuario', function() {
  return {
    restrict : 'AE',
    templateUrl: '../templates/menuUsuario.html'
  };
});

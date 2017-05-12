app.directive('menuLateral', function() {
  return {
    restrict : 'AE',
    templateUrl: '../templates/menuLateral.html',
    scope : {
      posicion : "=index"
    }
  };
});

app.directive('menuGestion', function() {
  return {
    restrict : 'AE',
    templateUrl: '../templates/menuGestion.html'
  };
});

app.directive('menuUsuario', function() {
  return {
    restrict : 'AE',
    templateUrl: '../templates/menuUsuario.html'
  };
});
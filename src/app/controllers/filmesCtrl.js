angular.module('MeuApp')

    .controller('filmesCtrl', function($scope, filmesFactory, alertaService, $filter){
        $scope.filmes = filmesFactory.jurassic_park

        $scope.filmeFavorito = "";

        $scope.alertaConfirmacao = function() {
            alertaService.confirmacao($scope.filmeFavorito);
        }

        $scope.alertaComum = function() {
            alertaService.comum($scope.filmeFavorito);
        }

        $scope.alertaConsoantes = function() {
            var consoantes = $filter('consoantes')($scope.filmeFavorito);
            alertaService.comum(consoantes);
        }

    })
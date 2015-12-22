angular.module('MeuApp')

    .controller('filmesCtrl', function($scope, filmesFactory, alertaService){
        $scope.filmes = filmesFactory.jurassic_park

        $scope.filmeFavorito = null;

        $scope.alertaConfirmacao = function() {
            alertaService.confirmacao($scope.filmeFavorito);
        }

        $scope.alertaComum = function() {
            alertaService.comum($scope.filmeFavorito);
        }

    })
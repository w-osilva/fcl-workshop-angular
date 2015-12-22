angular.module('MeuApp')

    .controller('filmesCtrl', function($scope, filmesFactory){
        $scope.filmes = filmesFactory.jurassic_park
    })
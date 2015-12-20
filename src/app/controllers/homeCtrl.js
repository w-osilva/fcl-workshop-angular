angular.module('MeuApp')

    .controller('homeCtrl', function($scope) {
        $scope.links = [
            {
                url: "#/hello-world",
                titulo: "Hello World"
            },
            {
                url: "#/filmes",
                titulo: "Filmes Legais"
            },
        ]
    })
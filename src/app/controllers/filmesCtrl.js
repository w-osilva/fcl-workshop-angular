angular.module('MeuApp')

    .controller('filmesCtrl', function($scope){
        $scope.filmes = [
            {
                titulo: "De volta para o futuro - parte 1",
                ano: "1985"
            },
            {
                titulo: "De volta para o futuro - parte 2",
                ano: "1989"
            },
            {
                titulo: "De volta para o futuro - parte 3",
                ano: "1990"
            },
            {
                titulo: "O Exterminador do Futuro",
                ano: "1984"
            },
            {
                titulo: "O Exterminador do Futuro 2 - Julgamento Final",
                ano: "1991"
            },
            {
                titulo: "O Exterminador do Futuro 3 - A Rebelião das Máquinas",
                ano: "2003"
            },
            {
                titulo: "O Exterminador do Futuro 4 - A Salvação",
                ano: "2009"
            },
            {
                titulo: "O Exterminador do Futuro 5 - Gênesis",
                ano: "2015"
            },
        ]
    })
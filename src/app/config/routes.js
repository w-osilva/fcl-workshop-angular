angular.module("MeuApp")

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'src/app/views/home.html',
                controller: 'homeCtrl'
            }).
            when('/filmes', {
                templateUrl: 'src/app/views/filmes.html',
                controller: 'filmesCtrl'
            }).
            when('/hello-world', {
                templateUrl: 'src/app/views/hello-world.html'
            }).
            when('/tempo', {
                templateUrl: 'src/app/views/previsao-tempo.html',
                controller: 'previsaoTempoCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
        }
    ])
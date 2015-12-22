angular.module('MeuApp')

    .controller('previsaoTempoCtrl', function($scope, previsaoTempoApi) {

       $scope.endpoints = previsaoTempoApi.getEndpoints();
       $scope.base_url = previsaoTempoApi.getBaseUrl();

    })
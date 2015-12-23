angular.module('MeuApp')

    .controller('previsaoTempoCtrl', function($scope, previsaoTempoApi, $http) {

        $scope.endpoints = previsaoTempoApi.getEndpoints();
        $scope.base_url = previsaoTempoApi.getBaseUrl();

        $scope.cidade = '';
        $scope.dadosTempo = null;
        $scope.existeDadosValidos = false;

        $scope.consultarPrevisao = function() {
            var url = $scope.base_url + $scope.endpoints.tempo_json +'/'+ $scope.cidade;
            $http({
                method: 'GET',
                url: url
            }).success(function (data){
                console.log(data)
                $scope.dadosTempo = data;
                $scope.existeDadosValidos = (typeof $scope.dadosTempo.erro === 'undefined')
            }).error(function (error, status){
                console.log(error , status);
            });
        }

    })
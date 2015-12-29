angular.module('MeuApp')

    .controller('carrosCtrl', function($scope, railsApi){

        var Carro = railsApi.resource.carro;

        $scope.atualizarListaCarros = function () {
            $scope.carros = Carro.index();
        }

        $scope.atualizarListaCarros();

        $scope.carroFavorito = "";

        $scope.salvarCarro = function() {
            var carro = new Carro();
            carro.nome = $scope.carroFavorito;
            carro.$save($scope.atualizarListaCarros);
        }

        $scope.alterarCarro = function(id) {
            Carro.show({id: id}, function(carro) {
                carro.nome = jQuery('input[name=carro_'+carro.id).val();
                if (carro.nome) {
                    Carro.update({id: carro.id }, carro, $scope.atualizarListaCarros)
                }
            })
        }

        $scope.removerCarro = function(id) {
            if (confirm("Você tem certeza que deseja remover esse carro maneiro?")) {
                Carro.destroy({id: id}, $scope.atualizarListaCarros)
            }
        }

    })
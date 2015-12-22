angular.module('MeuApp')
    .service('alertaService', function() {
        this.confirmacao = function(mensagem) {
            confirm(mensagem);
        }

        this.comum = function(mensagem) {
            alert(mensagem)
        }
    })
angular.module('MeuApp')

    .directive( 'ngFilme', function () {
        var diretiva = {};
        diretiva.restrict = "E";
        diretiva.templateUrl = "src/app/directives/templates/ng-filme.html";
        diretiva.scope = { // atributos isolados no escopo da diretiva
            titulo: '@',
            ano: '@',
            imagem: '@'
        };
        return diretiva;
    })
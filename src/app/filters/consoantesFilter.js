angular.module('MeuApp')

    .filter('consoantes', function() {
        return function(string) {

            if(!angular.isString(string)) return "";

            var vogais = ['a', 'e', 'i', 'o', 'u'];
            var numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
            var consoantes = "";

            angular.forEach(string, function(letra, key){
                if(!(vogais.indexOf(letra) !== -1) && !(numeros.indexOf(letra) !== -1))
                    consoantes += letra;
            })

            return consoantes;
        }
    })
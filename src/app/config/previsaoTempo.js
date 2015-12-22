angular.module("MeuApp")

    .config(function(previsaoTempoApiProvider){

        var config = {
            base_url: 'http://developers.agenciaideias.com.br',
            endpoints: {
                tempo_json: '/tempo/json',
                tempo_xml: '/tempo/xml'
            }
        };

        previsaoTempoApiProvider.setConfig(config);

    })
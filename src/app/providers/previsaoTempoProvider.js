angular.module('MeuApp')

    .provider('previsaoTempoApi', function () {

        var provider = {};
        var config = {
            base_url: "",
            endpoints: {}
        };

        provider.setConfig = function(nova_config) {
            config = nova_config;
        }

        provider.$get = function(){

            var getEndpoints = function() {
                return config.endpoints;
            }

            var getBaseUrl = function() {
                return config.base_url;
            }

            return {
                getBaseUrl: getBaseUrl,
                getEndpoints: getEndpoints
            }
        }

        return provider;
    })
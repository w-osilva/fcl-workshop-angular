angular.module('MeuApp')

    .provider('railsApi', function () {

        var provider = {};
        var config = {
            base_url: "",
            endpoints: {}
        };

        provider.setConfig = function(nova_config) {
            config = nova_config;
        }

        provider.$get = function($resource){

            var getConfig = function() {
                return config;
            }

            var resource = {
                carro: $resource('', null, {
                    index: {
                        method: 'GET',
                        url: config.base_url + config.endpoints.carros + ".json",
                        isArray: true
                    },
                    show: {
                        method: 'GET',
                        url: config.base_url + config.endpoints.carros + "/:id.json",
                        params: {id: '@id'},
                        isArray: false
                    },
                    save: {
                        method:'POST',
                        url: config.base_url + config.endpoints.carros + ".json",
                        isArray: false
                    },
                    update: {
                        method:'PUT',
                        url: config.base_url + config.endpoints.carros + "/:id.json",
                        params: {id: '@id'},
                        isArray: false
                    },
                    destroy: {
                        method:'DELETE',
                        url: config.base_url + config.endpoints.carros + "/:id.json",
                        params: {id: '@id'},
                        isArray: false
                    }
                })
            }

            return {
                getConfig: getConfig,
                resource: resource
            }
        }

        return provider;
    })
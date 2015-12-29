angular.module("MeuApp")

    .config(function(railsApiProvider){
        var config = {
            base_url: 'http://localhost:3000',
            endpoints: {
                carros: '/carros'
            }
        };

        railsApiProvider.setConfig(config);
    })
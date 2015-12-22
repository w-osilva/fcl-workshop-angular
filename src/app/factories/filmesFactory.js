angular.module("MeuApp")
    .factory('filmesFactory', function() {
        var jurassic_park = [
            {
                titulo: "Jurassic Park - Parque dos Dinossauros",
                ano: "1993",
                imagem: "https://upload.wikimedia.org/wikipedia/en/9/96/Jurassic_Park_logo.jpg"
            },
            {
                titulo: "Jurassic Park - O Mundo Perdido",
                ano: "1997",
                imagem: "http://img3.wikia.nocookie.net/__cb20120124040249/jurassicpark/es/images/9/9e/The_Lost_World_Jurassic_Park.jpg"
            },
            {
                titulo: "Jurassic Park - III",
                ano: "2001",
                imagem: "http://cdn.x2n.com.br/~filmesse/wp-content/uploads/2015/05/jurassic-park-3-1080p.jpg"
            },
            {
                titulo: "Jurassic World",
                ano: "2015",
                imagem: "https://upload.wikimedia.org/wikipedia/pt/archive/3/31/20131014194840!Jurassic_Park_IV_poster.jpg"
            },
        ];

        return {
            jurassic_park: jurassic_park
        };
    })

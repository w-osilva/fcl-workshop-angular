angular.module('MeuApp')

    .controller('filmesCtrl', function($scope){
        $scope.filmes = [
            {
                titulo: "De volta para o futuro - parte 1",
                ano: "1985",
                imagem: "http://cinema10.com.br/upload/noticias/devoltafuturore.jpg"
            },
            {
                titulo: "De volta para o futuro - parte 2",
                ano: "1989",
                imagem: "http://vtb.r7.com/ER7_CHA_CINE_AVENTURA_570kbps_2013-01-31_0e445dca-6baa-11e2-b6f8-71817204feea.jpg"
            },
            {
                titulo: "De volta para o futuro - parte 3",
                ano: "1990",
                imagem: "http://vtb.r7.com/ER7_CHA_CINE_AVENTURA_1011_570kbps_2012-11-09_1c072fd2-2a96-11e2-96eb-2f2fc483c515.jpg"
            },
            {
                titulo: "O Exterminador do Futuro",
                ano: "1984",
                imagem: "http://a69.g.akamai.net/n/69/10688/v1/img5.allocine.fr/acmedia/medias/nmedia/18/96/06/28/20442909.jpg"
            },
            {
                titulo: "O Exterminador do Futuro 2 - Julgamento Final",
                ano: "1991",
                imagem: "http://vtb.r7.com/ER7_CHA_CINE_RECORD_452kbps_2012-01-02_1aa06829-3563-11e1-9f42-5b03aebc10bc.jpg"
            },
            {
                titulo: "O Exterminador do Futuro 3 - A Rebelião das Máquinas",
                ano: "2003",
                imagem: "https://criticosbotequim.files.wordpress.com/2009/10/t3.jpg?w=600&h=357"
            },
            {
                titulo: "O Exterminador do Futuro 4 - A Salvação",
                ano: "2009",
                imagem: "https://www.sonypictures.com.br/Sony/images/_Wallpaper/1257961425099T4.jpg"
            },
            {
                titulo: "O Exterminador do Futuro 5 - Gênesis",
                ano: "2015",
                imagem: "http://www.homemexpresso.com.br/wp-content/uploads/2015/04/Exterminador-do-futuro-5-Genesis-1024x653.jpg"
            }
        ]
    })
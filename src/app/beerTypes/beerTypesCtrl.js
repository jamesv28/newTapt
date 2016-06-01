angular.module('app')
    .controller('beerTypesCtrl', ['$scope','beerTypesService', function ($scope, beerTypesService) {

        beerTypesService.getBeerTypes().
            then(function(data) {
            $scope.beerTypes = data.data;
            console.log('beer types', $scope.beerTypes);
           

        })

    }]); //end of controller
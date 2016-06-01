angular.module('app')
    .controller('indBeerTypesCtrl', ['$scope', '$stateParams', 'getIndBeersService', function ($scope, $stateParams, getIndBeersService) {
        // $scope.id = $routeParams.id;
        getIndBeersService.getBeer($stateParams.id)
            .then(function (data) {
                $scope.beer = data.data;
                console.log(data);
                $scope.food = getIndBeersService.foodPairings(data.data.foodpairings);
            });
    }]); // end of controller
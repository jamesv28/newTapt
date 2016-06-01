angular.module('app')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('indBeerTypes', {
                url: "/indBeerTypes/:id",
                templateUrl: 'app/indBeerType/indBeerType-template.html',
                controller: 'indBeerTypesCtrl'
            })
    });  //end of route
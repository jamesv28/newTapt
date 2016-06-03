angular
    .module('app')
    .config(function ($stateProvider, $httpProvider,  $urlRouterProvider) {

        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};

        $stateProvider
            .state('beerTypes', {
                url: '/beerTypes',
                templateUrl: 'app/beerTypes/beerTypes-template.html',
                controller: 'beerTypesCtrl'
            });
    }); //end of route
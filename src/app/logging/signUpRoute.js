angular
    .module('app')
    .config(function ($stateProvider,$httpProvider, $urlRouterProvider) {

        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};
        $stateProvider
            .state('signUp', {
                url: '/signUp',
                templateUrl: 'app/logging/signUp-template.html',
                controller: 'signUpCtrl'
            })
            .state('brewOwner', {
                url: '/brewOwner',
                templateUrl: 'app/logging/brewery-owner-template.html'
            })
    }); //end of route
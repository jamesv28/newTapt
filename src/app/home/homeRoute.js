angular.module('app').config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/home/home-template.html'
        })
}); //end of route

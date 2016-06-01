angular.module('app')
    .config( function ($stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {

        uiGmapGoogleMapApiProvider.configure({
               key: 'your api key'
        });
        $stateProvider
            .state('pubCrawl', {
                url: '/pubCrawl',
                templateUrl: 'app/pubCrawl/pubCrawl-template.html',
                controller: 'pubCrawlCtrl'
            });

    });

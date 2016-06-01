angular
    .module('app')
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('contact', {
                url: '/contact',
                templateUrl: 'app/contact/contact-template.html'
            });
        
}); // end of route
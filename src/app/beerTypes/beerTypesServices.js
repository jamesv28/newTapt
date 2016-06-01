angular
    .module('app')
    .service('beerTypesService', ['$http', function($http){

        return {
            getBeerTypes: function() {
                return $http({
                    method: 'GET',
                    url: 'http://tranquil-falls-61925.herokuapp.com/beertypes'
                })
                    .then(function (data) {
                        return data;
                    })
            }
        }

    }] );

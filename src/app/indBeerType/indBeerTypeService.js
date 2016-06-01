angular
    .module('app')
    .service('getIndBeersService', ['$http', function ($http) {
        return {
            getBeer: function (id) {
                return $http({
                    method: 'GET',
                    url: 'https://tranquil-falls-61925.herokuapp.com/beertypes/' + id
                })
                    .then(function (data) {
                        return data;
                    })
                    .catch(function (err) {
                        return err;
                    });
                
            },
            foodPairings: function (message) {
               return message.split(',');
            }
        }
    }]); // end of service
angular
    .module('app')
    .service('pubCrawlService', ['$http', function ($http) {
        return {
            findLattitude: function () {
                var promise = new Promise(function (resolve, reject) {
                    var lat;
                    navigator.geolocation.getCurrentPosition(foundLocation );
                    function foundLocation(position) {
                        lat  = position.coords.latitude;
                        resolve( lat);

                    }

                });
                // console.log('promise', promise);
                return promise;
            },
            findLongitude: function () {
                var promise2 = new Promise(function (resolve, reject) {
                    var long;
                    navigator.geolocation.getCurrentPosition(foundlocation);
                    function foundlocation(position) {
                        long = position.coords.longitude;
                        resolve(long);
                    } 
                });
                return promise2;
            },
            findBrewery: function (lat,long) {
                return $http({
                    method: 'get',
                    dataType: 'jsonp',
                    // method: 'jsonp',
                    url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + lat + ',' + long + '&radius=8046.72&keyword=brewery&key=AIzaSyDPaIYcTqVeU6gQub5ChIgJHsxDI_wvIz4'
                }).then(function (pubs) {
                    return pubs;
                })
            }
            // https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=39.683164999999995,-104.9610222&radius=8046.72&keyword=brewery&key=AIzaSyDPaIYcTqVeU6gQub5ChIgJHsxDI_wvIz4
            //api key: AIzaSyDPaIYcTqVeU6gQub5ChIgJHsxDI_wvIz4
            // dnever lat & long 39.7392° N, 104.9903° W


        }
    }]);

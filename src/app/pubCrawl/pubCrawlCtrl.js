(function () {
    angular.module('app')
        .controller('pubCrawlCtrl', pubCrawlCtrl);

    pubCrawlCtrl.$inject = ['$scope', 'uiGmapGoogleMapApi','pubCrawlService'];

    function pubCrawlCtrl($scope, uiGmapGoogleMapApi, pubCrawlService) {

        var p1 = pubCrawlService.findLattitude();
        var p2 = pubCrawlService.findLongitude();

        var lat, long;

        Promise.all([p1,p2]).then(function (data) {
            // console.log('primise all', data);
            lat = data[0];
            long = data[1];
            $scope.map = {
                center: {
                    latitude: data[0],
                    longitude: data[1]
                },
                zoom: 8
            };

            // console.log('map', $scope.map);
            $scope.$apply();
        });
        //     .then(function () {
        //     pubCrawlService.findBrewery(lat,long)
        //         .then(function (beer) {
        //             console.log('beer locations',beer);
        //         });
        // });

        var myLocation = new google.maps.LatLng(lat, long);
        var request = {
            location: myLocation,
            radius: 5000,
            types: ['brewery']
        };

        var service = new google.maps.places.PlacesService($scope.map);
        service.nearbySearch(request, function(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    var place = results[i];
                    console.log('places',place);
                    var marker = new google.maps.Marker({
                        map: $scope.map,
                        position: place.geometry.location
                    });

                }
            }
        });



        var styleArray = [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            }
        ];
        $scope.options = {
            styles: styleArray
        };


        uiGmapGoogleMapApi.then(function(maps) {
            // console.log('this is a map', maps);
        });
    }

})(); //end of controller
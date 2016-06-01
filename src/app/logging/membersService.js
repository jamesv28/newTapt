angular
    .module('app')
    .service('membersService',['$http','$window', function ($http, $window) {
        var baseUrl = 'https://tranquil-falls-61925.herokuapp.com';
        return {
            signUp: function (data) {
                // return $http.post(baseUrl + "/userRegister", data);
                return $http({
                    method: 'POST',
                    url: baseUrl + '/userRegister',
                    data: data
                    // config: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then(function (data) {
                    console.log('this is some data', data);
                    return data;
                }).catch(function (err) {
                    return err;
                })
            },
            setUserInfo: function(user) {
                $window.localStorage.setItem('user', JSON.stringify(user.data));
                $window.localStorage.setItem('token', JSON.stringify(user.token));
            }
        }
    }]); //end of service
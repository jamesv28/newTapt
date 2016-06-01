angular.module('app')
    .controller('signUpCtrl',['$scope','$state', 'membersService', function ($scope,$state, membersService) {
        $scope.user = {};
        $scope.signUp = function () {
            membersService.signUp($scope.user)
                .then(function (data) {
                    console.log('user',$scope.user);
                    console.log('user info', data);
                    membersService.setUserInfo(data);
                    $state.go('home');
                })
        }
    }]); //end of controller
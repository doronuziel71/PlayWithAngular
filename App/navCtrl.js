(function () {
    function navCtrl($scope, nav, $route) {
        $scope.nav = nav;
       $scope.isCurrent = function (route) {
            if($route.current){
                return route.title === $route.current.title;
            }
            
        }

    }

    var module = angular.module('doron');

    module.controller('navCtrl', ['$scope', 'nav', '$route', navCtrl])


})();
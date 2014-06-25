(function () {
    var module = angular.module('doron');

    var helloCtrl = function ($scope, md5, peopleService, gravatar) {


        $scope.gravatar = gravatar || angular.noop;
         peopleService.list().then(function(p){$scope.people=p;});

        $scope.remove = peopleService.remove;

        $scope.add = function (person) {
            peopleService.save(person);


            $scope.editedPerson = {};
        }

        $scope.edit = function (person) {
            $scope.editedPerson = person;
        }


    }


    module.controller('helloCtrl', helloCtrl);

})();
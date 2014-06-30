(function () {
    var module = angular.module('doron');

    var listCtrl = function ($scope, md5, peopleService, gravatar, confirm) {


        $scope.gravatar = gravatar || angular.noop;
        peopleService.list().then(function (p) {
            $scope.people = p;
        });

         $scope.remove = function(person){
             confirm('Are You Sure').then(function () {
                 peopleService.remove(person);
             }, function () { });
             
         }

        $scope.add = function (person) {
            peopleService.save(person);


            $scope.editedPerson = {};
        }

        $scope.edit = function (person) {
            $scope.editedPerson = person;
        }


    }


    module.controller('listCtrl', listCtrl);

})();
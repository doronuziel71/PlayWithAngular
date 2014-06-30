(function () {
    function editCtrl($scope,$routeParams,peopleService,gravatar,$location) {
        $scope.editedPerson = { name: "New Person" };
        $scope.gravatar = gravatar;
        $scope.save=function(){
            peopleService.save($scope.editedPerson).then(function (e) {
                $location.path('/list');
                toastr.success('person has been edited');
            });
            
        }
        function setEditedperson(person) {
            $scope.editedPerson = person || $scope.editedPerson;
        }

        if ($routeParams.email) {
            peopleService.get($routeParams.email).then(setEditedperson)
        }

    }

    var module = angular.module('doron');

    module.controller('editCtrl', ['$scope','$routeParams', 'peopleService','gravatar','$location',editCtrl])


})();
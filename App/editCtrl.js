(function () {
    function editCtrl($scope,$routeParams,peopleService,gravatar) {
        $scope.editedPerson = { name: "New Person" };
        $scope.gravatar = gravatar;
        $scope.save=function(){
            console.log($scope.editedPerson);
            console.log($scope.frmEditPerson);
        }
        function setEditedperson(person) {
            $scope.editedPerson = person || $scope.editedPerson;
        }

        if ($routeParams.email) {
            peopleService.get($routeParams.email).then(setEditedperson)
        }

    }

    var module = angular.module('doron');

    module.controller('editCtrl', ['$scope','$routeParams', 'peopleService','gravatar',editCtrl])


})();
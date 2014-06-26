(function () {
    angular.module('doron').constant('nav',
    [
       {
           path: '/list',

           route: {
               controller: 'listCtrl',
               templateUrl: '/list.html',
               title: 'List',
               icon: 'user'

           }
       },
       {
           path: '/temp',
           route: {
               controller: 'editCtrl',
               templateUrl: '/edit.html',
               title: 'Edit',
               icon: 'edit'

           }
       }
    ]);


    angular.module('doron').config(['$routeProvider', 'nav',
           function ($routeProvider, nav) {
               angular.forEach(nav, function (r) {
                   $routeProvider.when(r.path, r.route);


               });
               $routeProvider.otherwise({ redirectTo: '/list' })

           }]);



})();
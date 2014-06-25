(function () {
   

    angular.module('doron', ['ngRoute']);

     angular.module('doron').constant('nav', 
     [
        { 
            path: '/list',
       
            route: {
                controller: 'helloCtrl',
                templateUrl: '/hello.html',
                 title:'List',
                 icon:'user'
            
            }
        },
        {
            path:'/temp',
            route: {
                controller: 'tempCtrl',
                templateUrl: '/temp.html',
                 title:'Temp',
                 icon:'film'
            
            }
        }
    ]);
    angular.module('doron').config(['$routeProvider', 'nav',
            function ($routeProvider, nav) {
                angular.forEach(nav, function (r) {
                    $routeProvider.when(r.path, r.route);


                });
                $routeProvider.otherwise({redirectTo:'/list'})

            } ]);



})()
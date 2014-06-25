angular.module('doron').factory('gravatar', 

function (md5) { 
     return  function(email,size){
         return  'http://www.gravatar.com/avatar/' + md5(email) + '.jpg?s=' + size;
     };
});
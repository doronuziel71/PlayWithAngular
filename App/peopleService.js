(function () {
    function peopleService($q) {

        var people = [];

        var persist = function () {
            localStorage.setItem('people', JSON.stringify(angular.copy( people)));
        }

        var get = function (email) {

            var person;
            var persons = people.filter(function (x) {
                return email === x.email;
            });
            if (persons.length > 0)
                person=  persons[0];
            return $q.when(person);
        }

        var list = function () {
            return $q.when(people);
        }

        var remove = function (person) {
            var current = get(person.email);
            if (current) {
                people.splice(people.indexOf(current), 1);
                persist();
                return true;
            }
            return false;
        }

        var save = function (person) {
          return  get(person.email).then(function (current) {
                if (!current) {
                    people.push(angular.copy(person));
                }
                else {
                    angular.extend(current, person);
                }
                persist();
            })
         
        }

        var init = function () {
            people = JSON.parse(localStorage.getItem('people') || '[]');
        }
        init();

        return {
            save: save,
            list: list,
            get: get,
            remove: remove
        };


    }

    angular.module('doron').factory('peopleService', peopleService);

})();
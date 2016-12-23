(function () {

  angular.module('App', ['ngRoute']);

  function config ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/home/home.view.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })

      .when('/blog/:blogid', {
        templateUrl: '/home/homeDetail.view.html',
        controller: 'HomeDetailCtrl',
        controllerAs: 'vm'
      })
      .otherwise({redirectTo: '/'});

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
  }

  angular
    .module('App')
    .config(['$routeProvider', '$locationProvider', config]);

})();
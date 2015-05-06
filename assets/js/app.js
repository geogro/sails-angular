'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('angularsails', [
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/view1.html', controller: 'View1Controller'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

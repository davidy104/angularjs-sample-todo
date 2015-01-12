'use strict';

/**
 * @ngdoc overview
 * @name todoApp
 * @description
 * # todoApp
 *
 * Main module of the application.
 */
angular
    .module('todoApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ngAnimate',
        'todo'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/:id', {
                templateUrl: 'views/detail.html',
                resolve: {
                    id: function ($q, $route, api) {
                        return api.getOne($route.current.params.id);
                    }
                },
                controller: 'DetailCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

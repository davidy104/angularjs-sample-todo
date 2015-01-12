'use strict';

angular.module('todoApp')
    .controller('DetailCtrl', function () {
    })
    .controller('DetailInfoCtrl', function ($scope, api, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.item = api.currentItem;
        $scope.save = function () {
            api.update($scope.item).then(function () {
                window.location.href = '#/';
            });
        };
    });
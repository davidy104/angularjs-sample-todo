'use strict';

angular.module('todoApp')
.controller('DetailCtrl', function(){
    })
    .controller('DetailInfoCtrl', function($scope, api, $routeParams){
        $scope.id = $routeParams.id;
        $scope.item = {};
        $scope.$watch('id', function(){
           api.getOne($scope.id).then(function(data){
               $scope.item = data;
           }) ;
        });
        $scope.save = function() {
            api.update($scope.item).then(function(){
               window.location.href='#/';
            });
        };
    });
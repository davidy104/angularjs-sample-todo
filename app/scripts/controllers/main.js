'use strict';

angular.module('todoApp')
    .controller('TodoCtrl', function ($scope, $resource, api) {
      $scope.todos = [];

      var update = function(){
        api.get().then(function(data){
          $scope.todos = data;
        });
      };
      update();
      $scope.$on('update', update);
    })
    .controller('MainCtrl', function () {
    });

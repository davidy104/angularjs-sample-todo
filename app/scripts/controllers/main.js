'use strict';

angular.module('todoApp')
    .controller('TodoCtrl', function ($scope, $resource, api) {
      $scope.todos = [];
      $scope.newTodo = '';

      var update = function(){
        api.get().then(function(data){
          $scope.todos = data;
        });
      };
      update();
      $scope.add = function( event ) {
        if( event.keyCode === 13 ) {
          api.add($scope.newTodo).then(function(){
            update();
            $scope.newTodo = '';
          });
        }
      };
      $scope.save = function( event, todo ){
        if( event.keyCode === 13 ){
          api.update( todo).then( update );
        }
      };
      $scope.done = function( todo ){
        api.delete( todo).then( update );
      };
    })
    .controller('MainCtrl', function () {
    });

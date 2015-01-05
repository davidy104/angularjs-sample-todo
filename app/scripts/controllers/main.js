'use strict';

angular.module('todoApp')
    .controller('TodoCtrl', function ($scope, $resource) {
      $scope.todos = [];
      $scope.newTodo = '';
      var Task = $resource('/api/v1/todo/:taskId',{taskId:'@id'});
      var update = function(){
        Task.query(function(data){
          $scope.todos = data;
        });
      };
      update();
      $scope.add = function( event ) {
        if( event.keyCode === 13 ) {
          var t = new Task({text:$scope.newTodo});
          t.$save(function(){
            update();
            $scope.newTodo = '';
          });
        }
      };
      $scope.save = function( event, todo ){
        if( event.keyCode === 13 ){
          todo.$save();
        }
      };
      $scope.done = function( todo ){
        todo.$delete().then(update);
      };
    })
    .controller('MainCtrl', function () {
    });

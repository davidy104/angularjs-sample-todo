'use strict';

angular.module('todo')
.directive('todo',function( api ){
        return {
            scope: {
                item: '=todo'
            },
            template: '<button ng-click="done()" class="btn btn-xs btn-danger">Done</button><input type="text" ng-model="item.text" ng-keyup="save($event)">',
            link: function( scope ) {
                scope.save = function( event ){
                    if( event.keyCode === 13 ){
                        api.update( scope.item ).then( function(){
                            scope.$emit('update');
                        } );
                    }
                };
                scope.done = function(){
                    api.delete( scope.item );
                    scope.$emit('update');
                };
            }
        };
    })
    .directive('newtodo', function( api ){
      return {
          restrict: 'E',
          scope: {
              size: '@?'
          },
          template: '<div class="row"><div class="col-md-12"><input type="text" ng-model="newTodo" ng-keyup="add($event)" style="font-size: {{size}};"></div></div>',
          link: function( scope ) {
              scope.size = scope.size || 'normal';
              scope.newTodo = '';
              scope.add = function( event ) {
                  if( event.keyCode === 13 ) {
                      api.add(scope.newTodo).then(function(){
                          scope.$emit('update');
                          scope.newTodo = '';
                      });
                  }
              };
          }
      };
    });
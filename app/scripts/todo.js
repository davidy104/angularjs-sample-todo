/**
 * Created by david on 6/01/15.
 */
'use strict';

angular.module('todo',[])
    .factory('api', function( $resource, $q ){
        var Task = $resource('/api/v1/todo/:taskId',{taskId:'@id'});
        return {
            get: function() {
                var deferred = $q.defer();
                Task.query(function(data){
                    deferred.resolve(data);
                });
                return deferred.promise;
            },
            add: function( text, cb ) {
                var deferred = $q.defer();
                var t = new Task({text:text});
                t.$save(function(){
                    deferred.resolve();
                });
                return deferred.promise;
            },
            delete: function( todo, cb ){
                todo.$delete().then(cb);
            },
            update: function( todo, cb ){
                todo.$save().then(cb);
            }
        };
    });
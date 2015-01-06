/**
 * Created by david on 6/01/15.
 */
'use strict';

angular.module('todo',[])
    .factory('api', function( $resource ){
        var Task = $resource('/api/v1/todo/:taskId',{taskId:'@id'});
        return {
            get: function( cb ) {
                Task.query(function(data){
                    cb(data);
                });
            },
            add: function( text, cb ) {
                var t = new Task({text:text});
                t.$save(function(){
                    cb();
                });
            },
            delete: function( todo, cb ){
                todo.$delete().then(cb);
            },
            update: function( todo, cb ){
                todo.$save().then(cb);
            }
        };
    });
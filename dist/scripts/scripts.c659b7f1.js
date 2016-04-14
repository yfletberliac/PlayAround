"use strict";angular.module("PlayAroundApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.sortable","LocalStorageModule"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]).config(["localStorageServiceProvider",function(a){a.setPrefix("ls")}]),angular.module("PlayAroundApp").controller("MainCtrl",["$scope","localStorageService",function(a,b){a.addTodo=function(){a.todos.push(a.todo),a.todo=""},a.removeTodo=function(b){a.todos.splice(b,1)};var c=b.get("todos");a.todos=c||[],a.$watch("todos",function(){b.set("todos",a.todos)},!0)}]),angular.module("PlayAroundApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("PlayAroundApp").run(["$templateCache",function(a){a.put("views/about.html",'<h1 align="center">This is just the beginning</h1> <h1 align="center">===</h1> <h1 align="center">Further positive things to be developped</h1> <h1 align="center">===</h1> <h1 align="center">About to be written / Work in progress by LBP</h1>'),a.put("views/main.html",'<div class="container"> <h2>List of thoughts :</h2> <!-- Todos input --> <form role="form" ng-submit="addTodo()"> <div class="row"> <div class="input-group"> <input type="text" ng-model="todo" placeholder="What are you thinking about?" class="form-control"> <span class="input-group-btn"> <input type="submit" class="btn btn-primary" value="Add"> </span> </div> </div> </form> <!-- Todos list --> <div ui-sortable ng-model="todos"> <p class="input-group" ng-repeat="todo in todos" style="padding:5px 10px; cursor: move"> <input type="text" ng-model="todo" class="form-control"> <span class="input-group-btn"> <button class="btn btn-danger" ng-click="removeTodo($index)" aria-label="Remove">X</button> </span> </p> </div> </div>')}]);
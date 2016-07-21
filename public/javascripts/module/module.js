var app = angular.module('myApp',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.
	when('/login',{
       controller:'usercontroller',
       templateUrl: 'javascript/view/login.html'
	}).
	when('/signup',{
       controller:'usercontroller',
       templateUrl: 'javascript/view/signup.html'
	}).
	otherwise({
	 redirectTo:'/'
	 });
});
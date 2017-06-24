var app=angular.module('dayu',['ng','ngRoute']);
app.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/Frontpage',{
            templateUrl:'tpl/frontpage.html',
            controller:'frontpage'
        })
        .when('/Login',{
            templateUrl:'tpl/login.html',
            controller:''
        })
        .when('/Registe',{
            templateUrl:'tpl/registe.html',
            controller:''
        })
        .when('/Usercenter',{
            templateUrl:'tpl/usercenter.html',
            controller:''
        })
        .when('/List',{
            templateUrl:'tpl/list.html',
            controller:''
        })
        .otherwise({
            redirectTo:'/Frontpage'
        });
}]);
app.controller('jump',['$scope','$location',function($scope,$location){
    $scope.jump=function(resPath){
        $location.path(resPath);
    };
}]);
app.controller('frontpage',['$scope',function ($scope) {
  // 循环轮播到上一个项目
  $scope.leftSlide=function(){
    $("#carousel-example-generic").carousel('prev');
  };
  // 循环轮播到下一个项目
  $scope.rightSlide=function(){
    $("#carousel-example-generic").carousel('next');
  };
}]);
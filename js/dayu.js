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
            controller:'usercenter'
        })
        .when('/List',{
            templateUrl:'tpl/list.html',
            controller:'list'
        })
        .otherwise({
            redirectTo:'/Frontpage'
        });
}]);
app.controller('jump',['$scope','$location',"$timeout",function($scope,$location,$timeout){
    $scope.jump=function(e,resPath){
        $location.path(resPath);
        var AContext=e.target.textContent;
        $timeout(function () {
          if (AContext==="首页"){
            $("#nav-header a:contains('首页')").addClass("active");
          }else if(AContext==="乐库"){
            $("#nav-header a:contains('乐库')").addClass("active");
          }else if(AContext==="用户中心"){
            $("#nav-header a:contains('用户中心')").addClass("active");
          }
        },10);
    };
}]);
app.controller('frontpage',['$scope',function ($scope) {
  // console.log();
  // 动态改变img尺寸
  var firstImg=$('#carousel-example-generic .item img:first-child');
  var resizeImgH=function () {
    var imgWidth=firstImg.css("width");
    $("#carousel-example-generic .item img").css("height",imgWidth);
  };
  // $timeout(resizeImgH,10);
  window.onload=resizeImgH;
  $(window).resize(resizeImgH);
  // 循环轮播到上一个项目
  $scope.leftSlide=function(){
    $("#carousel-example-generic").carousel('prev');
  };
  // 循环轮播到下一个项目
  $scope.rightSlide=function(){
    $("#carousel-example-generic").carousel('next');
  };
}]);
app.controller('list',["$scope",function ($scope) {
  $scope.list=[
    {name:"夕阳之歌",singer:"梅艳芳",time:"3:50"},
    {name:"夕阳之歌",singer:"梅艳芳",time:"3:50"},
    {name:"夕阳之歌",singer:"梅艳芳",time:"3:50"},
    {name:"夕阳之歌",singer:"梅艳芳",time:"3:50"},
    {name:"夕阳之歌",singer:"梅艳芳",time:"3:50"},
    {name:"夕阳之歌",singer:"梅艳芳",time:"3:50"},
    {name:"夕阳之歌",singer:"梅艳芳",time:"3:50"},
    {name:"夕阳之歌",singer:"梅艳芳",time:"3:50"},
    {name:"夕阳之歌",singer:"梅艳芳",time:"3:50"},
    {name:"夕阳之歌",singer:"梅艳芳",time:"3:50"},
    {name:"夕阳之歌",singer:"梅艳芳",time:"3:50"}
  ];
  $("#listTab tbody").on("click",".play",function () {
    var that=$(this);
    var playS=that.parent().parent().parent().siblings().children().children().children(".fa-pause-circle-o");
    var hasPause=playS.hasClass("fa-pause-circle-o");
    if(hasPause){
      playS.removeClass("fa-pause-circle-o").addClass("fa-play-circle-o");
    }
    that.toggleClass("fa-play-circle-o").toggleClass("fa-pause-circle-o");
  });
  $("#listTab tbody").on("click",".like",function () {
    var that=$(this);
    that.toggleClass("fa-heart-o").toggleClass("fa-heart");
  });
}]);
app.controller("usercenter",["$scope",function () {

}]);
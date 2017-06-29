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
          }else if(AContext==="用户"){
            $("#nav-header a:contains('用户')").addClass("active");
          }
        },10);
    };
}]);
app.controller('frontpage',['$scope',function ($scope) {
  // console.log();
  // 动态改变img尺寸
  var firstImg=$('#carousel-example-generic .item img:first-child');
  var carsouelAimg=$("#carousel-example-generic .item img");
  var carsouelBimg=$("#carousel-example-generic1 .item img");
  var resizeImgH=function () {
    var imgWidth=firstImg.css("width");
    carsouelAimg.css("height",imgWidth);
    carsouelBimg.css("height",imgWidth);
  };
  // $timeout(resizeImgH,10);
  window.onload=resizeImgH;
  $(window).resize(resizeImgH);
  // 循环轮播到上一个项目
  var carsouelA=$('#carousel-example-generic');
  var carsouelB=$('#carousel-example-generic1');
  $scope.leftSlide=function(){
    carsouelA.carousel('prev');
  };
  $scope.leftSlide1=function(){
    carsouelB.carousel('prev');
  };
  // 循环轮播到下一个项目
  $scope.rightSlide=function(){
    carsouelA.carousel('next');
  };
  $scope.rightSlide1=function(){
    carsouelB.carousel('next');
  };
}]);
app.controller('list',["$scope",function ($scope) {
  $scope.list=[
    {name:"风再起时",singer:"张国荣",time:"3:50",src:"songs/wind.mp3"},
    {name:"再见警察",singer:"冯曦妤",time:"3:50",src:"songs/goodbyeplice.mp3"},
    {name:"We Are One",singer:"Kelly",time:"3:50",src:"songs/weareone.mp3"},
    {name:"夕阳之歌",singer:"梅艳芳",time:"3:50",src:"songs/goodbyeplice.mp3"},
    {name:"夕阳之歌",singer:"梅艳芳",time:"3:50",src:"songs/goodbyeplice.mp3"},
    {name:"夕阳之歌",singer:"梅艳芳",time:"3:50",src:"songs/goodbyeplice.mp3"},
    {name:"夕阳之歌",singer:"梅艳芳",time:"3:50",src:"songs/goodbyeplice.mp3"},
    {name:"夕阳之歌",singer:"梅艳芳",time:"3:50",src:"songs/goodbyeplice.mp3"},
    {name:"夕阳之歌",singer:"梅艳芳",time:"3:50",src:"songs/goodbyeplice.mp3"},
    {name:"夕阳之歌",singer:"梅艳芳",time:"3:50",src:"songs/goodbyeplice.mp3"},
    {name:"夕阳之歌",singer:"梅艳芳",time:"3:50",src:"songs/goodbyeplice.mp3"}
  ];
  var playerSpan=document.getElementById("playerSpan");
  $scope.play=function (e,src) {
    var playSpan=$(e.target);
    var otherSpan=playSpan.parent().parent().siblings().children().children(".fa-pause-circle-o");
    var playing=playSpan.hasClass("fa-pause-circle-o");
    if(otherSpan.length>0){
      otherSpan.removeClass("fa-pause-circle-o").addClass("fa-play-circle-o");
    }
    playSpan.toggleClass("fa-play-circle-o").toggleClass("fa-pause-circle-o");
    if(!playing){
      playerSpan.innerHTML=`<audio id="player" src=${src} autoplay controls="controls"></audio>`;
    }else {
      var player=document.getElementById("player");
      player.pause();
    }
    console.log(playerSpan);
  };
  $scope.like=function (e,name) {
    var thisSpan=$(e.target);
    thisSpan.toggleClass("fa-heart-o").toggleClass("fa-heart");
    console.log(name);
  };
}]);
app.controller("usercenter",["$scope",function () {

}]);
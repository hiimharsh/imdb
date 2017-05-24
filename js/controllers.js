angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ngMaterial', 'ngAnimate', 'ngMessages', 'ngAria', 'ngSanitize'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout, $http) {
  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.moviename = '';
  $scope.movieyear = '';
  $scope.apiUrl = 'https://www.omdbapi.com/';

  $scope.getDetails = function(formimdb, movie) {
    moviename = movie.name;
    $scope.apiUrl = $scope.apiUrl + '?t=' + moviename + '&r=json';
    // console.log(moviename);
    if (movie.year) {
      movieyear = movie.year;
      $scope.apiUrl = $scope.apiUrl + '?t=' + moviename + '&y=' + movieyear + '&r=json';
    }
    // console.log(movieyear);
    if (formimdb.$valid) {
      $http.get($scope.apiUrl)
        .success(function(data) {
          $scope.moviedata = data;
          console.log(data);
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
    }
  };

})

.controller('headerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });
})

;

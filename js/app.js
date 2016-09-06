// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ui.router',
  'phonecatControllers',
  'templateservicemod',
  'navigationservice',
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider, $mdThemingProvider, $mdIconProvider) {
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "views/template.html",
      controller: 'HomeCtrl'
    });
  $urlRouterProvider.otherwise("/");

  $mdIconProvider.icon('md-close', 'img/icons/ic_close_24px.svg', 24);

  var customPrimary = {
    '50': '#404040',
    '100': '#333333',
    '200': '#262626',
    '300': '#1a1a1a',
    '400': '#0d0d0d',
    '500': '#000000',
    '600': '#000000',
    '700': '#000000',
    '800': '#000000',
    '900': '#000000',
    'A100': '#4d4d4d',
    'A200': '#595959',
    'A400': '#666666',
    'A700': '#ffffff'
  };
  $mdThemingProvider.definePalette('customPrimary', customPrimary);

  var customAccent = {
    '50': '#b3b3b3',
    '100': '#bfbfbf',
    '200': '#cccccc',
    '300': '#d9d9d9',
    '400': '#e6e6e6',
    '500': '#f2f2f2',
    '600': '#ffffff',
    '700': '#ffffff',
    '800': '#ffffff',
    '900': '#ffffff',
    'A100': '#ffffff',
    'A200': '#ffffff',
    'A400': '#f2f2f2',
    'A700': '#ffffff'
  };
  $mdThemingProvider.definePalette('customAccent', customAccent);

  var customWarn = {
    '50': '#ff8080',
    '100': '#ff6666',
    '200': '#ff4d4d',
    '300': '#ff3333',
    '400': '#ff1a1a',
    '500': '#ff0000',
    '600': '#e60000',
    '700': '#cc0000',
    '800': '#b30000',
    '900': '#990000',
    'A100': '#ff9999',
    'A200': '#ffb3b3',
    'A400': '#ffcccc',
    'A700': '#800000'
  };
  $mdThemingProvider.definePalette('customWarn', customWarn);

  $mdThemingProvider.theme('default').primaryPalette('customPrimary').accentPalette('customAccent').warnPalette('customWarn');

});


firstapp.directive('img', function($compile, $parse) {
  return {
    restrict: 'E',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      if (!attrs.noloading) {
        $element.after("<img src='img/loading.gif' class='loading' />");
        var $loading = $element.next(".loading");
        $element.load(function() {
          $loading.remove();
          $(this).addClass("doneLoading");
        });
      } else {
        $($element).addClass("doneLoading");
      }
    }
  };
});

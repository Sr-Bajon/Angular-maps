angular.module('appMaps', ['uiGmapgoogle-maps'])
  .controller('mainCtrl', function ($scope, $interval) {
    $scope.map = {center: {latitude: 40.1451, longitude: -99.6680}, zoom: 4}
    $scope.options = {scrollwheel: false};
    $scope.marker = {
      coords: {
        latitude: 40.1451,
        longitude: -99.6680
      },
      show: false,
      id: 0
    };

    $scope.windowOptions = {
      visible: false
    };

    $scope.onClick = function () {
      $scope.windowOptions.visible = !$scope.windowOptions.visible;
    };

    $scope.closeClick = function () {
      $scope.windowOptions.visible = false;
    };

    $scope.title = "Window Title!";

    $interval(function () {
      $scope.marker.coords = {
        latitude : $scope.marker.coords.latitude +1,
        longitude: $scope.marker.coords.longitude -1
      };
    }, 1000);
  });

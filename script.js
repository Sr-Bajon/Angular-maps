angular.module('appMaps', ['uiGmapgoogle-maps'])
  .controller('mainCtrl', function ($scope, $log, $timeout, $interval) {
    $scope.map            = {
      center: {latitude: 40.1451, longitude: -99.6680},
      zoom  : 4
    };
    $scope.map            = {
      center: {latitude: 40.1451, longitude: -99.6680},
      zoom  : 4
    };
    $scope.options        = {scrollwheel: false};
    $scope.coordsUpdates  = 0;
    $scope.dynamicMoveCtr = 0;
    $scope.marker         = {
      id     : 0,
      coords : {
        latitude : 40.1451,
        longitude: -99.6680
      },
      options: {draggable: false}
    };
    $scope.$watchCollection("marker.coords", function (newVal, oldVal) {
      if (_.isEqual(newVal, oldVal))
        return;
      $scope.coordsUpdates++;
    });
    $interval(function () {
      $scope.marker.coords = {
        latitude : $scope.marker.coords.latitude +1,
        longitude: $scope.marker.coords.longitude -1
      };
      $scope.dynamicMoveCtr++;
    }, 4000);
  });

angular.module('appMaps', ['uiGmapgoogle-maps'])
  .controller('mainCtrl', function ($scope, $log, $timeout, $interval) {
    $scope.map = {center: {latitude: 40.1451, longitude: -99.6680}, zoom: 4};
    $scope.options = {scrollwheel: false};
    $scope.coordsUpdates = 0;
    $scope.dynamicMoveCtr = 0;
    $scope.marker = {
      id: 0,
      coords: {
        latitude: 40.1451,
        longitude: -99.6680
      },
      options: {draggable: true},
      events: {
        dragend: function (marker, eventName, args) {
          $log.log('marker dragend');
          var lat = marker.getPosition().lat();
          var lon = marker.getPosition().lng();
          $log.log(lat);
          $log.log(lon);

          $scope.marker.options = {
            draggable: true,
            labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
            labelAnchor: "100 0",
            labelClass: "marker-labels"
          };
        }
      }
    };
    $scope.$watchCollection("marker.coords", function (newVal, oldVal) {
      if (_.isEqual(newVal, oldVal))
        return;
      $scope.coordsUpdates++;
    });
    $timeout(function () {
      $scope.marker.coords = {
        latitude: 42.1451,
        longitude: -100.6680
      };
      $scope.dynamicMoveCtr++;
      $timeout(function () {
        $scope.marker.coords = {
          latitude: 43.1451,
          longitude: -102.6680
        };
        $scope.dynamicMoveCtr++;
      }, 2000);
    }, 1000);


    var stop = $interval(function () {
      $scope.marker.coords.latitude = $scope.marker.coords.latitude + 1;
      $scope.marker.coords.longitude = $scope.marker.coords.longitude - 1;
      $log.log($scope.marker.coords.latitude);
      $log.log($scope.marker.coords.longitude);
    }, 1000);
  });

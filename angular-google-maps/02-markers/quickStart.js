(function () {
  'use strict';

  angular.module('GMaps', ['uiGmapgoogle-maps']);

  angular.module('GMaps').config(function (uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      //key      : 'AIzaSyC_rs4dpOd65HW-B2GehT4FU6WhqNU4cO4',
      libraries: 'weather,geometry,visualization'
    });
  });

  angular.module('GMaps').controller("gmController", function ($scope, uiGmapGoogleMapApi) {
    // Do stuff with your $scope.
    // Note: Some of the directives require at least something to be defined originally!
    // e.g. $scope.markers = []

    $scope.map = {center: {latitude: 40.1451, longitude: -99.6680}, zoom: 8};


    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function (maps) {
      console.log(maps);
      init();
    });

    var marker  = {
      id     : 0,
      coords : {
        latitude : 40.1451,
        longitude: -99.6680
      },
      options: {
        draggable: true,
        animation: 1
      }
    };
    var marker2 = {
      id     : 1,
      coords : {
        latitude : 40.1454,
        longitude: -99.6680
      },
      options: {
        draggable: true
      }
    };
    var marker3 = {
      id     : 2,
      coords : {
        latitude : 40.1460,
        longitude: -99.6680
      },
      options: {
        draggable: true,
        animation: 2
      }
    };

    $scope.markers = [marker, marker2];

    function init() {

    }

    $scope.add = function () {
      $scope.markers.push(marker3);
    };

    $scope.shift = function () {
      $scope.markers.shift();
    };

    $scope.animar = function () {
      $scope.markers[1].options.animation = 1;
    };
  });
})();

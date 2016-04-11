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

    $scope.map = {center: {latitude: 45, longitude: -73}, zoom: 8};


    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function (maps) {
      console.log(maps);
    });
  });
})();

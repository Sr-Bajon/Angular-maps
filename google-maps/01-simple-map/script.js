angular.module('appMaps', ['uiGmapgoogle-maps'])
  .controller('MainCtrl', [function () {
    var mainctrl = this;
    mainctrl.map = {center: {latitude: 40.47654, longitude: -3.67239}, zoom: 17};
    mainctrl.options = {scrollwheel: false, disableDefaultUI: true};
  }]);

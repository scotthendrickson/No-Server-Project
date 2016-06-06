angular.module('routerApp').directive("randomBackgroundcolor", function () {
    return {
        restrict: 'EA',
        replace: false,
        link: function (scope, element, attr) {
          element.bind('mouseenter', function () {
              var color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
              element.css('background-color', color);
          });
          element.bind('mouseleave', function () {
              var color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
              element.css('background-color', color);
          });

        }
    }
}).directive('myCurrentTime', ['$interval', 'dateFilter', function($interval, dateFilter) {

  function link(scope, element, attrs) {
    var format,
        timeoutId;

    function updateTime() {
      element.text(dateFilter(new Date(), format));
      element.css('color', 'white');
      element.css('float', 'right');
      element.css('margin-top', '14.5%');
    }

    scope.$watch(attrs.myCurrentTime, function(value) {
      format = value;
      updateTime();
    });
    // start the UI update process; save the timeoutId for canceling
    timeoutId = $interval(function() {
      updateTime(); // update DOM
    }, 1000);
  }

  return {
    link: link
  };
}]);

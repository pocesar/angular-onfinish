  angular.module('onfinish', []).directive('onFinish', ['$parse', '$timeout', function($parse, $timeout){
    return {
      restrict: 'A',
      link: function($scope, element, attrs) {
        if ($scope.$last === true && $scope.$$destroyed === false && element) {
          $timeout(function(){ // this is needed so it gets executed after the inside loop is done and fired asap
            $parse(attrs.onFinish)($scope); // you may just want to set a variable of the scope, they are shared
          }, 0, false);
        }
      }
    };
  }]);

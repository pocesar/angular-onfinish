  angular.module('onfinish', []).directive('onFinish', [function(){
    return {
      restrict: 'A',
      link: function($scope, element, attrs) {
        if ($scope.$last === true && $scope.$$destroyed === false && element) {
          $scope.$evalAsync(attrs.onFinish);
        }
      }
    };
  }]);

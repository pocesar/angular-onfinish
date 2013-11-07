angular-onfinish
================

Directives that execute a function or an expression when ng-repeat is done with looping. No need for events.

## Usage

#### Include it in your app:

```js
var yourapp = angular.module('yourapp', ['onfinish']);
```

#### In your HTML, set the `on-finish` attribute:

```html
<li ng-repeat="item in list" on-finish="finished()"></li>
<li ng-repeat="item in items" on-finish="done=true"></li>
```

#### Make sure your scope has the variables / functions:

```js
App.controller('MyCtrl', function(){
  $scope.finished = function(){
    console.log('done looping');
  };
  
  $scope.list = ['yaba', 'daba', 'doo'];
  
  $scope.items = [
    {id: 1},
    {id: 2},
    {id: 3}
  ];
  
  $scope.done = false;
});
```

#### Have fun

## Notes

* Expressions are evaluated inside the `on-finish=""`, so you cannot use `$scope`  variables there
* There are no modifications on the original `$scope`, it's the exact same `$scope` that you have inside your `ng-repeat` directive (same IDs, variables, etc)
* The code is evaluated BEFORE the browser render the DOM elements. Be aware of it. If you must, place in your `finished` function a `$timeout` with the 3rd parameter as `false`, so it won't trigger another `$digest` cycle  

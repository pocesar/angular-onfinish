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
* If you decide to set a variable in there, you must know that it won't be "useful" at the current `$digest` cycle, since it executes 0ms after the loop is done (`$timeout` with 3rd parameter set to `FALSE`). So the best way is just to use a `$scope` function and if you need any `$apply` there, you can do so.

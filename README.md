angular-onfinish
================

Directives that execute a function or an expression when ng-repeat is done with looping. No need for events.

## Usage

1. Include it in your app:

```js
var yourapp = angular.module('yourapp', ['onfinish']);
```

2. In your HTML, set the `on-finish` attribute:

```js
<li ng-repeat="item in list" on-finish="finished()"></li>
<li ng-repeat="item in items" on-finish="done=true"></li>
```

3. Make sure your scope has the variables / functions:

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

4. Have fun


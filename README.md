angular-file-directive
===========================

File parsing directive for AngularJS

## Installation

Install with [Bower](http://bower.io/):
```bash
$ bower install angular-file-directive
```

## Usage

Include the library:
```html
<script src="/bower_components/angular-file-directive/angular-file-directive.js"></script>
```

Import it to the angular applicaiton:
```javascript
angular.module('myApp', ['ngFile']);
```

Use it in the view:
```html
<!-- Bind the values to $scope.files -->
<input  type="file"
        file="files"
        accept="image/*"
        multiple>

<!-- Render the selected files directly in the view -->
<div ng-repeat="file in files">
  <h4>{{ file.name }}</h4>
  <img  alt="{{ file.name }}"
        ng-src="data:{{ file.type }};base64,{{ file.body }}">
</div>
```

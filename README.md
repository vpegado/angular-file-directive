angular-file-directive
===========================

File parsing directive for AngularJS

## Installation
Install with [Bower](http://bower.io/):

    $ bower install angular-file-directive
    
Include from a [RawGit](https://rawgit.com/)'s CDN:

    <script src="//cdn.rawgit.com/vpegado/angular-file-directive/v1.1.0/file.js"></script>
    
Or [download](https://github.com/vpegado/angular-file-directive/archive/master.zip) manually.

## Usage
Application

    angular.module('myApp', ['file']);


View

    <!-- Bind the values to $scope.files -->
    <input type="file"
      file="files"
      accept="image/*"
      multiple>
    
    <!-- Render the selected files directly in the view -->
    <div ng-repeat="file in files">
      <h4>{{ file.name }}</h4>
      <img alt="{{ file.name }}"
        ng-src="data:{{ file.type }};base64,{{ file.body }}">
    </div>

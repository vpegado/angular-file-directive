'use strict';

angular.module('adminApp')
  .directive('file', [function () {
    return {
      scope: {
        file: '='
      },
      link: function (scope, elem) {
        elem.bind('change', function (changeEvent) {
          var files = [];
          angular.forEach(changeEvent.target.files, function (file) {
            var isText = file.type.indexOf('text/') === 0;
            var reader = new FileReader();
            reader.file = file;
            reader.onload = function (e) {
              var data = e.target.result;
              if (!isText) {
                data = btoa(data);
              }
              files.push({
                type: file.type,
                name: file.name,
                body: data
              });
              if (files.length === changeEvent.target.files.length) {
                scope.$apply(function () {
                  scope.file = files;
                });
              }
            };
            if (isText) {
              reader.readAsText(file);
            } else {
              reader.readAsBinaryString(file);
            }
          });
        });
      }
    };
  }]);

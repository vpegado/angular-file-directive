'use strict';

angular.module('file', [])
  .directive('file', [function () {
    return {
      scope: {
        file: '='
      },
      link: function (scope, elem) {
        // Listen for change in the input element
        elem.bind('change', function (changeEvent) {
          var files = [];
          // For Each targeted file
          angular.forEach(changeEvent.target.files, function (file) {
            // Check if file type is 'text'
            var isText = file.type.indexOf('text/') === 0;
            var reader = new FileReader();
            reader.file = file;
            reader.onload = function (e) {
              var body = e.target.result;
              // Base64 Encode file of type other than 'text'
              if (!isText) {
                body = btoa(body);
              }
              // Compile data from file
              files.push({
                updatedAt: file.lastModifiedDate.toJSON(),
                size: file.size,
                type: file.type,
                name: file.name,
                body: body,
                file : file
              });
              // Apply new values to $scope when the last file is done.
              if (files.length === changeEvent.target.files.length) {
                scope.$apply(function () {
                  scope.file = files;
                });
              }
            };
            // Read file as 'text' or 'binary string'
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

'use strict';

angular.module('ngFile', [])
  .directive('file', [function () {
    return {
      scope: {
        file: '='
      },
      link: function (scope, elem) {
        function getFileModifiedDate (file) {
          if (file.lastModifiedDate) {
            return file.lastModifiedDate.toJSON();
          }
          else if (file.lastModified) {
            return new Date(file.lastModified).toJSON();
          }
          return new Date().toJSON();
        }
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
                var binary = "";
                var bytes = new Uint8Array(body);
                var length = bytes.byteLength;
                for (var i = 0; i < length; i++) {
                  binary += String.fromCharCode(bytes[i]);
                }
                body = btoa(binary);
              }
              // Compile data from file
              files.push({
                updatedAt: getFileModifiedDate(file),
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
              reader.readAsArrayBuffer(file);
            }
          });
        });
      }
    };
  }]);

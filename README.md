angular-file-directive
===========================

File parsing directive for Angular.js

1. `bower install angular-file-directive`
2. Include the `file.js` script into your app.
3. Add `file` as a module dependency to your app.

4. Insert code in to view

        <input type="file" file="csvFile" accept="text/csv">

5. Insert code in controller

        $scope.csvFile = '';
        $scope.items = [];
        $scope.$watch('csvFile', function () {
            $scope.items = $scope.csvFile.split('\n');
        })

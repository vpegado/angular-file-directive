angular-file-directive
===========================

File parsing directive for Angular.js

1. `bower install angular-file-directive`
2. Include the `file.js` script into your app.
3. Add `file` as a module dependency to your app.

4. Insert code in to view

        <!-- Bind the values to $scope.files -->
        <input type="file" file="files" accept="image/*" multiple>
        
        <!-- Render the selected files directly in the view -->
        <div ng-repeat="file in files">
          <h4>{{ file.name }}</h4>
          <img ng-src="data:{{ file.type }};base64,{{ file.body }}" alt="{{ file.name }}">
        </div>



var baymsApp = angular.module('baymsApp', ['ng-context-menu']);

// Authentication & Tabs
baymsApp.controller('baymsController', function($scope) {
   $scope.required = {"done": $('input:invalid').length <= 0};
   $scope.auth = {}; // Sent to server with almost every request
   $scope.user_type = sessionStorage.getItem('user_type');
   if (sessionStorage.getItem('user_name')) {
      // Traditional username/password authentication
      $scope.auth.user_name = sessionStorage.getItem('user_name');
      $scope.auth.user_pass = sessionStorage.getItem('user_pass');
   }
   else if (sessionStorage.getItem('google_token')) {
      // Google Sign-In authentication
      $scope.auth.google_token = sessionStorage.getItem('google_token');
   }

   // Restore current tab (or set to default)
   if ($scope.user_type > 0)
       $scope.tab = 1;
   else
       $scope.tab = 0; 
   if (sessionStorage.getItem('tab'))
      $scope.tab = sessionStorage.getItem('tab');
   // Save the current tab in sessionStorage
   $scope.$watch('tab',function(){
      sessionStorage.setItem('tab', $scope.tab);
   });
});
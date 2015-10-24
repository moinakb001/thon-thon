// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";
    var market = angular.module('market', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
        // Routes will be here
    }]);
    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        var products = {};
        var client = new WindowsAzure.MobileServiceClient('https://rtmarker.azure-mobile.net/', 'lsFNDUxmyAiNzEpBFDPjGwkogMUgQx91');

        client.login('google').then(function () {
            
            products = client.getTable('products');
            
            market.controller('newProd', ['$scope', function ($scope) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    products.insert({ name: $scope.name, latitude: position.coords.latitude, longitude: position.coords.longitude, description: $scope.description, lifespan: $scope.lifespan });
                })
                


            }]);
        }, function (error) { });
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();
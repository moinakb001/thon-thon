angular.module('TabsApp', [])
.controller('TabsCtrl', ['$scope', function ($scope) {
    $scope.tabs = [{
            title: 'Buy',
            url: 'buy.html'
        }, {
            title: 'Listing',
            url: 'list.html'
        }, {
            title: 'Three',
            url: 'three.tpl.html'
    }];

    $scope.currentTab = 'buy.html';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    }
    
    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }
}]);
'use strict';

angular.module('hostping')
        .controller('mainController', function ($scope, $http) {

          $scope.url = 'php/ping.php';

        	$scope.ping = function() {

        		// Create the http post request
        		// the data holds the keywords
        		// The request is a JSON request.
        		$http.post($scope.url, { "hostString" : $scope.hostName})
            .success(function(data, status) {
          			$scope.status = status;
          			$scope.data = data;
                console.log(data);
          			$scope.result = data;
        		})
        		.error(function(data, status) {
          			$scope.data = data || "Request failed";
          			$scope.status = status;
        		});
        	};

        });

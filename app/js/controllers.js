'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', 'SolrService', function($scope, SolrService) {

  	reset();

  	// autocomplete();

  	$scope.search = function() {
  		SolrService.json({q: query(), fq: params()}, function(result) {
  			$scope.$result = result.response;
  		});
  	};

  	//PRIVATE
  	function query() {
  		var $q = $scope.q;
  		if($q == '') {
  			$q = '*:*';
  		}
  		return $q;
  	}

	function autocomplete() {
  		$scope.$watch('q', function($q) {
	  		$scope.search();
	  	});
  	}

  	function reset() {
  		$scope.$result = {};
	  	$scope.q = '';
	  	$scope.country = '';
	  	$scope.language = '';
	  	$scope.min = '';
	  	$scope.max = '';
  	}

  	function params() {
  		var $country = $scope.country;
  		if($country == '') {
  			$country = '*';
  		}

  		var $language = $scope.language;
  		if($language == '') {
  			$language = '*';
  		}

  		var $min = $scope.min;
  		if($min == '') {
  			$min = '0';
  		}

  		var $max = $scope.max;
  		if($max == '') {
  			$max = '*';
  		}

  		return ['country:' + $country, 'language:' + $language, 'population\:['+ $min +' TO '+ $max +']'];
		}

  }])
  .controller('MyCtrl2', ['$scope', 'SolrService', function($scope, SolrService) {
    $scope.q = '*:*'
  	$scope.search = function() {
  		SolrService.jsonp({q: $scope.q}, function(result) {
  			$scope.$result = result.response;
  		});
  	};
  }]);
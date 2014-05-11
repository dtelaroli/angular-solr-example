'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', ['ngResource']).
  value('version', '0.1')

  .factory('SolrService', function($resource) {
  	return $resource('/solr/collection1/select', {}, {
  		json: {
  			method: 'GET',
  			params: {
  				wt: 'json'
  			}
  		},
  		jsonp: {
  			//overwrite default url
  			url: 'http://localhost:8983/solr/collection1/select'
  			method: 'JSONP',
  			params: {
  				wt: 'json',
  				'json.wrf': 'JSON_CALLBACK'
  			}
  		}
  	});
  });
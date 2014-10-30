

angular.module('newspaper', [
	'templates-app',
	'newspaper.map',
	'ui.router'
	])

  .config(
  	['$stateProvider', '$urlRouterProvider',
  	function ($stateProvider,   $urlRouterProvider) {
  		$urlRouterProvider.otherwise('/map');

  		$stateProvider
  			.state('map', {
				url:'/map',
				templateUrl: 'map/map.tpl.html',
				controller: 'MapCtrl',
				data: {
					pageTitle: 'Report'
				}
  		})  

      .state('history', {
        url:'/paper',
        templateUrl: 'report/report.tpl.html',
        controller: 'MapCtrl',
        data: {
          pageTitle: 'Paper list'
        }
      })


  	}] )

  .controller('NewspaperCtrl', function() {
   
  });

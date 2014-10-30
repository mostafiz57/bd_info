var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');
var TOKEN_SECRET = require('../config/api').TOKEN_SECRET;



module.exports = function(app, serverConfig) {
	app.get('/', function(req, res) {

		var content ={
			title: 'Bangladesh Info.',
			appName: 'newspaper',
			rootController: 'NewspaperCtrl',
			scripts: [
				{src: '/static/libs/angular/angular.js'},
				{src: '/static/libs/angular-bootstrap/ui-bootstrap-tpls.min.js'},
				{src: 'http://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.10/angular-ui-router.min.js'},
				{src: '/static/libs/angular-resource/angular-resource.js'},
				{src: '/static/libs/angular-cookies/angular-cookies.js'},
				{src: '/static/js/templates-app.js'},
				{src: '/static/js/templates-common.js'},
				{src: '/static/js/bd_info.js'},
				{src: '/static/libs/lodash/dist/lodash.underscore.js'},
				{src: '/static/libs/jquery/dist/jquery.js'},
				{src: '//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js'},
				{src: '/static/libs/moment/moment.js'},
				{src: '/static/libs/d3/d3.js'},
				{src: '/static/libs/select2/select2.min.js'},
				{src: '/static/libs/jquery-icheck/icheck.min.js'},
				{src: '/static/libs/DataTables/media/js/table-data.js'},
				{src: '/static/libs/DataTables/media/js/jquery.dataTables.min.js'},
				{src: '/static/libs/DataTables/media/js/DT_bootstrap.js'},
				{src: '/static/libs/switch/js/bootstrap-switch.js'},
				{src: '/static/libs/basic-setup/main.js'},
				{src: '/static/libs/basic-setup/bxslider.js'},
				{src: 'http://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/js/bootstrap-datepicker.min.js'}
			],
			links:[
			{
				rel: 'stylesheet',
				href: 'static/css/daterangepicker-bs3.css',
			},

			{
				rel: 'stylesheet',
				href: 'static/iCheck/all.css',
			},
			{
				rel: 'stylesheet',
				href: 'static/css/select2.css'
			},
			{
				rel: 'stylesheet',
				href : 'static/css/bootstrap-switch.css'
			},
			{
				rel: 'stylesheet',
				href : 'static/css/bxslider.css'
			},
			{
				rel: 'stylesheet',
				href :'static/css/DT_bootstrap.css'
			},
			{
				rel :'stylesheet',
				href :'http://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/css/datepicker3.min.css'
			}

			]
		}
		res.render('index',content);
	});

};

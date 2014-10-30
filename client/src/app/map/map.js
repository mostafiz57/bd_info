angular.module('newspaper.map',[])

	.controller('MapCtrl' ,[
		'$scope',
		'$rootScope',
		'$http',
		'$filter',
		'paperList',
		 function($scope,$rootScope, $http,$filter,paperList){

		 	$scope.State =[
		 	{id:'al', val:'Albama'},
		 	{id : 'as' , val :'Alaska' },
		 	{id :'ar' , val : 'Arizona' } ,
		 	{id : 'ca' , val : 'California'} ,
		 	{id :'ny' , val :  'New York' }
		 	];
		 	$scope.Language = ['Bangla', 'English' ];
		 	$scope.PublicatonStatus = ['National' , 'International' , 'Regional'];
		 	$scope.PublicatonType = ['Daily' , 'Weekly' , 'Monthly'];
		 	$scope.PaperType = ['Newspaper' , 'Online','Blog'];
		 	$scope.modalTitle ="Add News Papaer";

		 	var deafualtForm = {
		 		name : '',
		 		rank : '',
		 		url : '',
		 		editor : '',
		 		stDate : '',
		 		dStatus : '',
		 		dLanguage : ''
		 	}


           $scope.deafualtForm = deafualtForm;
           
			paperList.getPapers().then(function(papers) {
					$scope.newsPapers=papers;

			});

            // $scope.newsPapers =pep;
             
             $scope.GetStates = function(){
             	var tp = $scope.tp;
             }

			$scope.cancelEdit = function() {
				notify('Abu Hanif');
				
			};

			$scope.showModel = function() {

				$scope.editStatus= false;
				$scope.modalTitle = "Add Newspaper";
				$scope.textSaveBtn = "Add Paper";
				$scope.deafualtForm.name = "";
				$scope.deafualtForm.url= "";
				$scope.deafualtForm.stDate =   ""; 
				$scope.deafualtForm.rank = "";
				$scope.deafualtForm.editor = "";

				$('#myModal').modal('show') ;   
			};

			$scope.showEditModel = function(ths){
				//console.log(ths);

				$scope.modalTitle = "Edit Newspaper";
				$scope.editStatus = true;
				$scope.deafualtForm.name = ths.paper_name;
				$scope.deafualtForm.paper_id = ths.paper_id;
				$scope.deafualtForm.url=ths.url;
				$scope.deafualtForm.stDate =   $filter('date')(ths.starting_date, "MM/dd/yyyy"); 
				$scope.deafualtForm.rank = ths.rank;
				$scope.deafualtForm.editor = ths.editor;
				$scope.textSaveBtn = "Update Paper";

				$('#publicatonStatus').select2("val", ths.publication_status);
				$('#PaperLanguage').select2("val" , ths.paper_language);
				$('#PaperType').select2('val' , ths.paper_type);
				
				$('#myModal').modal('show');

				//Main.init(); 

			}


			var save = function(user){
				//emulate sync with server
				console.log('requesting');
			};


			$scope.addPaper = function(paper) {

			  var paperType = $('#PaperType').select2('data').text;
			  var languge =	 $('#PaperLanguage').select2('data').text;
			  var publicatonStatus = $('#publicatonStatus').select2('data').text;
			  var startingDate= $('#sDate').val();

			  if(!paper.paper_id){
			  	paper.paper_id = new  Date().valueOf();
			  }


			  paper ={
			  	paper_type : paperType,
			  	paper_language : languge,
			  	publication_status : publicatonStatus,
			  	starting_date : startingDate,
			  	paper_name : paper.name,
			  	rank : paper.rank,
			  	paper_id : paper.paper_id,
			  	url : paper.url,
			  	editStatus : $scope.editStatus
			  }

			  paperList.savePrivateHealthData(paper).then(function(status){


			  	//$scope.newsPapers.push(paper)

			  	var pepArr = eval($scope.newsPapers );

			  	

			  	if(status.data)
			  	{
					  deafualtForm = {
				 		name : '',
				 		rank : '',
				 		url : '',
				 		editor : '',
				 		stDate : '',
				 		dStatus : '',
				 		dLanguage : ''
				 	}
			  		//$scope.deafualtForm = 

			  		

			  		if(paper.editStatus){
			  			for(var i =0 ; i < pepArr.length ; i++ ){
			  				if(pepArr[i].paper_id == paper.paper_id ){
			  					pepArr[i].paper_name =paper.paper_name;
			  					pepArr[i].editor = paper.editor;
			  					pepArr[i].url = paper.url;
			  					pepArr[i].starting_date = paper.starting_date;

			  				}
			  			}


			  			$scope.newsPapers=pepArr;
			  			$('#myModal').modal('hide');
			  		}else{
			  		
			  			$scope.newsPapers.push(paper);
						$scope.editStatus= false;
						$scope.modalTitle = "Add Newspaper";
						$scope.textSaveBtn = "Add Paper";
						$scope.deafualtForm.name = "";
						$scope.deafualtForm.url= "";
						$scope.deafualtForm.stDate =   ""; 
						$scope.deafualtForm.rank = "";
						$scope.deafualtForm.editor = "";

			  		}
			  	}

			  });

				
			};

			 $scope.$on('$viewContentLoaded', function() {
                
			 	//TableData.init();

			 	
			 	 // $('.bx-wrapper').css({'max-width':1124});

			 	setTimeout(function(){
			 		 $('.slider1').bxSlider({ slideWidth: 138, minSlides: 1, maxSlides:100 , slideMargin: 18,  speed: 1500  });
			 		//TableData.init();
			 	}, 1000);
			 	Main.init();

				 $('#stDate').datepicker({
					format: 'mm/dd/yyyy',
					endDate: '10d'
				});

			 });

		 }])

		.directive("enter", function(){
			return function(scope, element) {
					element.bind("mouseenter", function(){
					console.log("I'm inside of you!");
				})
			}
		})

		.factory('paperList' , ['$http' , '$rootScope' ,'$location' , function($http , $rootScope ,$location ){

			var paper = [];
			
			return{

				getPapers : function(){

					return $http.get('api/get_state').then(function(response) {
						paper = response.data;
						//$rootScope.$on('handleSharedBooks',paper);
						return paper;
					})

				},
				savePrivateHealthData : function($params){

					return $http({
						header: {'Content-Type': 'application/x-www-form-urlencoded'},
						url :'api/save_book',
						method: "POST",
						data: $params,
					})
					.success(function(addData) {
						console.log('return---',addData)
						ppaer = addData;
						$rootScope.$on('handleSharedBooks',ppaer);

					});
				}
			};

		}])
		
		.directive('input', function() {
		    return {
		        restrict: 'E',
		        require: '?ngModel',
		        link: function(scope, elm, attr, ctrl) {
		            if (!ctrl) {
		                return;
		            }
		            
		            elm.bind('focus', function () {
		                elm.addClass('has-focus');

		                scope.$apply(function () {
		                    ctrl.hasFocus = true;
		                });
		            });

		            elm.bind('blur', function () {
		                elm.removeClass('has-focus');
		                elm.addClass('has-visited');

		                scope.$apply(function () {
		                    ctrl.hasFocus = false;
		                    ctrl.hasVisited = true;
		                });
		            });
		           
		            if (attr.type == 'text' && attr.ngPattern === '/[0-9]/') {
		                elm.bind('keyup',function (){
		                    var text = this.value;
		                    console.log(text);
		                  this.value = text.replace(/[a-zA-Z]/g,'');
		                });
		            }  
		        }
		    };
})




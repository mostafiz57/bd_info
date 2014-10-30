var newspaper = require('../models/newspaper'),
  _ = require('lodash'),
 q = require('q'),
 bodyParser = require('body-parser');




var loadStore = function(req ,res){
	var deferred = q.defer();

/*	   	var paper = new newspaper({
		 paper_name	: 'eProthom-alo',
		 paper_type : 2 ,
		 paper_language : 'Bangladesh',
		 rank : 1,
		 publication_status : 1 ,
		 publiction_type : 1 ,
		 url : 'www.eProthom-alo.com',
		 comments : 'Most popular paper in Bangladesh'
		});
*/
		newspaper.find(function (err, papers) {
		  if (err) 
		     deferred.reject(err);
		else
		   
		    deferred.resolve(papers);
		   return res.send(papers);
		})

		var data = deferred.promise;

}

var paperCURD = function(req , res){
	if( !req.body.editStatus){
	 savePaper(req,res);
	}else{
	 var status = updatePaper(req,res);
	}

}

var updatePaper = function(req , res){
	if(req.method == 'POST'){
		var deferred = q.defer();
		var papers = req.body;

		var paper_model = new newspaper(papers);
     /*  newspaper.findByfield('paper_language',"Bangla",function(err,lan){
       	console.log(lan);
       })
      */


      newspaper.update({"paper_id" : papers.paper_id},papers,function(err,success){
      	if(err){
      		 deferred.reject(err);
      	}else{
      		deferred.resolve(success);
      	}

      	deferred.promise.then(function(val){
      		if(val>0){
	            console.log('opertion status',val)
	 	        return res.send(true);
      			
      		}
      		else{
      			return res.send(false);
      		}
      	});

      })

	}
}

var savePaper = function(req , res){
	if (req.method == 'POST') {
        var deferred = q.defer();
        var papers =req.body;
       

		var paper_model = new newspaper(papers);
		paper_model.save(function(err,success){
			if(err)
			{
			 console.log('Fail to save....')
             deferred.reject(err);
			}else{
				console.log('save success')
				deferred.resolve(success);
			}

		   return res.send( true);

		});

		

    }
	
}


module.exports.newspaper = function(app, serverConfig){
	app.use(bodyParser.urlencoded({
	extended: true
	}));
	app.use(bodyParser.json());

	app.get('/api/get_state', loadStore);
	app.post('/api/save_book' , paperCURD)

}
var mongoose = require('mongoose'),
 	autoIncrement = require('mongoose-auto-increment'),
	Schema = mongoose.Schema,
	q = require('q'),
	_ = require('lodash');


var newspaperSchema = new Schema({
	paper_name :{type : String , unique : true },
	paper_id :{type : String , unique : true},
	paper_language : {type : String},  					// EN= English Bn = Bangla
	paper_type : {type:String , default : 1} , 			// 1 = NewsPaper ; 2 = online Paper
	hot_listed :{type: Boolean , default:true},
	rank :{type:String},
    publication_status : {type:String}, 				// 1 = Local News paper 2 = International 3 = Regional
    publiction_type : {type : String}, 					//1 = Daily ; 2=Weekly ; 3 = MOnthly
    url : {type: String },
    starting_date: { type: Date, default: Date.now },
    editor : {type : String},
    comments :{type : String}
 
});

newspaperSchema.statics.findByfield = function (field,val , cb) {
	
	if(field == 'paper_language'){
		this.find({
			paper_language : new RegExp(val,'i')
		},cb)
			
		}
	
}


newspaperSchema.methods.findSimilarPaperType = function findSimilarPaperType (cb) {
  return this.model('paper').find({ type: this.type }, cb);
}


module.exports = mongoose.model('newspaper' , newspaperSchema)


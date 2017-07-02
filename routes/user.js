var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var residentSchema = new Schema({
  name:String,
  roomNo: Number,
  hostel:String,
  roommates:[String],
},{ collection:'residents'});

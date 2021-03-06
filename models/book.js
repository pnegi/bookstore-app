const mongoose = require('mongoose');

//Genres Schema

const bookSchema = mongoose.Schema({
    title:{
        type : String,
    required : true
},

genre:{
    type : String,
    required : true
},

description:{
    type : String
},

author:{
    type : String,
    required : true
},

publisher:{
    type : String
},

page:{
    type : String
},

image_url:{
    type : String,
    required : true
},

buy_url:{
    type : String
},

create_date:{
    type: Date,
    default: Date.now
}
});

var Book = module.exports = mongoose.model('Book' ,bookSchema);

//get books
module.exports.getBooks = function( callback, limit){
    Book.find(callback).limit(limit);
};
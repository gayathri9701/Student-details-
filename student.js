const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
  name: {
    type: String,
    required: true,

  },
  email: {
    type: String,

  },
  rollno: {
    type: Number,
    required: true

  },
  dob: {
      type: String,
      required: true,
      trim: true,
  
  },
  gender: {
    type: String,
    possiblevalues: ["male","female"]

  },
  image:{
    type:String,
    required: true

  }
 


}, {
  collection: 'students'
})

module.exports = mongoose.model('Student', studentSchema)
// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var leadSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    company:{
        type: Strinpg,
        required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    requirements: {
      type: [String],
      required: true
    },
    closed: {
      type: Boolean,
      required: true,
      default: false
    },
    quoted:{
      type: Boolean,
      required: true,
      default: false
    },
    user: {
      type: String,
      required: true
    }


}, {
    timestamps: true
});
var leads = mongoose.model('lead', leadSchema);

// make this available to our Node applications
module.exports = leads;
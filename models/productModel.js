const mongoose = require("mongoose");
const config = require('config');
const jwt = require('jsonwebtoken');

const productmodel = mongoose.model('product',new mongoose.Schema(
    {
        pname: { type: String },
        pdescription: { type: String },
        pprice:{type:String}
      }
))           


module.exports = { productmodel };
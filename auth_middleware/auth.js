const jwt = require("jsonwebtoken")
const config = require("config");
const JWT = config.get("JWT");

exports.auth = async (req, res, next) => {
    let cheker =  req.headers["token"]
    let data = jwt.verify(cheker,JWT)
    if(data){
        next()
    }
  };  
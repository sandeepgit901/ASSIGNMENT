const {productmodel } = require('../models/productModel')


exports.productRegister = async (req, res) => {
    console.log('im in');
    try { 
        let pname = req.body.pname
        let product = await productmodel.findOne({pname});
        if (product) return res.status(400).send("User already registered.");
        let result = await productmodel(req.body).save(); 
        res.status(200).send({message:"product saved",result}) 
    } catch (error) {
      return error;
    }
    };

exports.products = async (req, res) => {
        try {
          const { limit = 10, skip = 0 } = req.query;
      
          const products = await productmodel
            .find()
            .limit(Number(limit))
            .skip(Number(limit) * Number(skip));
      
          res.status(200).send({ msg: "product retrived successfully.","productlen":products.length, products });
        } catch (error) {
          return res.status(500).send("Internal server error.");
        }
      };    
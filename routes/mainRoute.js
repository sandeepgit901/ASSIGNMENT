const express = require("express");
const router = express.Router();

const user = require("../controllers/userController");
const product = require("../controllers/productsController");
const { auth } = require("../auth_middleware/auth");

router.post("/login", user.loginUser);
router.post("/register", user.registerUser);

router.post("/product",auth, product.products );
router.post("/pregister",product.productRegister);
// router.delete("/delete", user.deleteUser);

module.exports = router;

const express = require("express");
const router = express.Router();
const userController = require("../controller/staffController");

router.post('/signin', userController.signin);
router.post('/register', userController.signup);
router.get('/', userController.getAllUsers);

module.exports = router;
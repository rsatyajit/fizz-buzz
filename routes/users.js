var express = require('express');
var router = express.Router();
const userController = require("../controller/user.controller");
const requestMiddleware = require("../middlewares/requestHandler.middleware");
const reponseMiddleware = require("../middlewares/responseHandlers.middleware");

/* user apis */
router.get('/fizz-buzz', requestMiddleware, userController.fizzBuzzCount, reponseMiddleware);

module.exports = router;

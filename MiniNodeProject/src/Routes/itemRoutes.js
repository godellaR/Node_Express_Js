const express = require("express");
const router = express.Router();
const controller = require("../controllers/post-controller");
const authenticateToken = require("../controllers/post-controller");

router.route("/Login").post(controller.login);
router.route("/Signup").post(controller.signup);
router
  .route("/getUsers")
  .get(authenticateToken.authenticateToken, controller.listAllUsers);
router.route("/onChange").post(controller.userExist);

module.exports = router;

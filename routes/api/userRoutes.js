const router = require("express").Router();

const {GetAllUsers} = require("../../controllers/userController");

router.route("/").get(GetAllUsers);

module.exports = router;
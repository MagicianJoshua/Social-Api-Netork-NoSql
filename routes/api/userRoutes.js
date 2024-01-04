const router = require("express").Router();

const {GetAllUsers,createUser} = require("../../controllers/userController");

router.route("/").get(GetAllUsers).post(createUser);

module.exports = router;
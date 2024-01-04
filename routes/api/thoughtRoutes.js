const router = require("express").Router();
const {GetAllThoughts} = require("../../controllers/thoughtController")

router.route("/").get(GetAllThoughts);

module.exports = router;
const router = require("express").Router();
const {GetAllThoughts,CreateThought,GetSingleThought} = require("../../controllers/thoughtController")

router.route("/").get(GetAllThoughts).post(CreateThought);

router.route("/:id").get(GetSingleThought);

module.exports = router;
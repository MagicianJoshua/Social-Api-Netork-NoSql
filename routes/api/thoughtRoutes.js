const router = require("express").Router();
const { GetAllThoughts,
        CreateThought,
        GetSingleThought,
        DeleteThought,
        UpdateThought,
        CreateReaction,
        DeleteReaction} = require("../../controllers/thoughtController")

router.route("/").get(GetAllThoughts).post(CreateThought);

router.route("/:id").get(GetSingleThought).delete(DeleteThought).put(UpdateThought);

router.route("/:id/reactions").post(CreateReaction);

router.route("/:id/reactions/:reactionId").delete(DeleteReaction);

module.exports = router;
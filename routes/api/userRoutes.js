const router = require("express").Router();

const { GetAllUsers,
        GetOneUser, 
        CreateUser,
        UpdateUser, 
        DeleteUser} = require("../../controllers/userController");

router.route("/").get(GetAllUsers).post(CreateUser);

router.route("/:userId").get(GetOneUser).put(UpdateUser).delete(DeleteUser);

router.route("/userId/friends/:friendId").post().delete();

module.exports = router;
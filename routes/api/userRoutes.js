const router = require("express").Router();

const { GetAllUsers,
        GetOneUser, 
        CreateUser,
        UpdateUser, 
        DeleteUser,
        AddFriend,
        DeleteFriend} = require("../../controllers/userController");

router.route("/").get(GetAllUsers).post(CreateUser);

router.route("/:userId").get(GetOneUser).put(UpdateUser).delete(DeleteUser);

router.route("/:userId/friends/:friendId").post(AddFriend).delete(DeleteFriend);

module.exports = router;
const {User} = require("../models");

module.exports = {
    async GetAllUsers (req,res) {
        try {
            const users = await User.find();
            res.json(users);
            
        } 
        catch(err){
            res.status(500).json("No good")
        }
    },
    // async createUser(req, res) {
    //     try {
    //       const user = await User.create(req.body);
    //       res.json(user);
    //     } catch (err) {
    //       res.status(500).json(err);
    //     }
    //   }
}
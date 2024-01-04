const {User} = require("../models");

module.exports = {
    async GetAllUsers (req,res) {
        try {
            const users = await User.find().populate('thoughts');
            res.json(users);
            
        } 
        catch(err){
            res.status(500).json("No good")
        }
    },

    async GetOneUser (req,res) {
      try {
        const user = await User.findById(req.params.userId)
        res.json(user);
      }catch (err){
        res.status(500).json(err)
      }

    },

    async CreateUser(req, res) {
        try {
          const user = await User.create(req.body);
          res.json(user);
        } catch (err) {
          res.status(500).json(err);
        }
      },

    async UpdateUser(req,res) {
      try {
        const user = await User.findByIdAndUpdate(req.params.userId,req.body);
        res.json(`${req.body.username}'s info has been updated`);
      } catch (err) {
        res.status(500).json(err);
      }
    },

    async DeleteUser(req,res) {
      try {
        const user = await User.findByIdAndDelete(req.params.userOd)
        res.json(`${user.username} has been deleted`);
      } catch (err) {
        res.status(500).json(err)
      }
    },
}
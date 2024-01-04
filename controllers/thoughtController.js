const {Thought, User} = require('../models')

module.exports = {
    async GetAllThoughts(req,res) {
        try {
        const thought = await Thought.find();
        res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async GetSingleThought(req,res) {
        try {
            const thought = await Thought.findById(req.params.id);
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async CreateThought(req,res) {
        try {

            const thought = await Thought.create(req.body);
            
            await User.findByIdAndUpdate(req.body.userId, 
                { $push: {thoughts:thought._id}},
                {new:true});

                res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    
    async DeleteThought(req,res) {
        try {
            const thought = await Thought.findByIdAndDelete(req.params.id)
            res.json(`${thought.thoughtText} has been deleted`);
          } catch (err) {
            res.status(500).json(err)
          }
    },

    async UpdateThought(req,res) {
        try {
            const thought = await Thought.findByIdAndUpdate(req.params.id, req.body);
            res.json("Thought has been updated!")
        }   catch (err) {
            res.status(500).json(err)
          }
    },


    async CreateReaction(req,res) {
        try {
            const reaction = await Thought.findByIdAndUpdate(req.params.id, {reactions:req.body});
            res.json(`${reaction} added`)
        } catch (err) {
            res.status(500).json(err)
          }
    }  ,

    async DeleteReaction(req,res) {
        try {
            const reaction = await Thought.findByIdAndUpdate(req.params.id, 
                {$pull:{reactions:{_id: req.params.reactionId}}},
                {new:true});
                
            res.json(`reaction has been deleted`);
        } catch {
            res.status(500).json(err);
        }
    }

    

}
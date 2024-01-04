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
    }
}
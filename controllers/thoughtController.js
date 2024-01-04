const {Thought} = require('../models')

module.exports = {
    async GetAllThoughts(req,res) {
        try {
        const thought = await Thought.find();
        res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async CreateThought(req,res) {
        try {
            const thought = await Thought.Create(req.body);
            res.json(thought);
        }catch (err) {
            res.status(500).json(err);
        }
    }
}
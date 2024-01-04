const { Schema, model, Mongoose} = require('mongoose');


const reactionSchema = new Schema ({
    reactionId:{
    type:Schema.Types.ObjectId,
    default:() => new Types.ObjectId(),
    },
    reactionBody:{
        type:String,
        require:true,
        maxlength:280,
    },
    username:{
        type:String,
        require:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        get:timestamp => new Date(timestamp).toLocaleString('en-US'),
    },
},
{
    toJSON:{
        
        getters:true,
    },
    id:false,
})


const thoughtSchema = new Schema({
    thoughtText:{
        type:String,
        require:true,
        minlength:1,
        maxlength:280,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        get:timestamp => new Date(timestamp).toLocaleString('en-US'),
    },
    username:{
        type:String,
        require:true,
    },
    reactions:[reactionSchema],

}, {
    toJSON:{
        virtuals:true,
        getters:true,
    },
    id:false,
})

thoughtSchema.virtual("reactionCount").get(function(){
    return this.reactions.length;
})

const Thought = model("thought",thoughtSchema );

module.exports = Thought;


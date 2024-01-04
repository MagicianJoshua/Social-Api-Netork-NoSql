const { Schema, model} = require('mongoose');

const userSchema = new Schema ({

    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:[/^([\w\d_\.-]+)@([\w\d\.-]+)\.([\w\.]{2,6})$/],
    },
    thoughts:{
        _id:[
            {
                type:Schema.Types.ObjectId,
                ref:"Thought,"
            }
        ]
    },
    friends:{
        _id:[
            {
                type:Schema.Types.ObjectId,
                ref:"User",
            }
        ]
    },
    

},
{
    toJSON:{
        virtuals:true,
    },
    id:false,
}
);

userSchema.virtual('UserFriends').get(function() {
    return this.UserFriends.length;
});

const User = model("User",userSchema);

module.exports = User;
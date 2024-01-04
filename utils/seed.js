const connection = require("../config/connection")
const {User,Thought} = require("../models");
const {Usernames,Emails,Sayings} = require("./data")


console.time("Commence Seeding");
connection.once("open", async () => {
    let checkUsers = await connection.db.listCollections({name:"users"}).toArray();
    
    //This drops previous Databases
    if (checkUsers.length) {
        await connection.dropCollection("users");
    }

    let checkThoughts = await connection.db.listCollections({name:"thoughts"}).toArray();
    
    //This drops previous Databases
    if (checkThoughts.length) {
        await connection.dropCollection("thoughts");
    }

    //
    const users = [];

    for (let i = 0; i < Usernames.length; i++){
        const user = new User ({
            username:Usernames[i],
            email:Emails[i]
        });
        users.push(user);
    }

    let thoughts = []

    for(let i = 0; i < users.length; i++){
        let user = users[i];
        let thought = new Thought( {
            thoughtText:Sayings[i],
            username: user.username,
        })
    
    thoughts.push(thought);
    user.thoughts.push(thought._id);
    }

    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);
    console.timeEnd("Seeding hath been completed");
    process.exit(0);
});


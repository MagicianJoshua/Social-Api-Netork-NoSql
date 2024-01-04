const connection = require("../config/connection")
const User = require("../models/User.js");
const {Usernames,Emails,Sayings} = require("./data")


console.time("Commence Seeding");
connection.once("open", async () => {
    let check = await connection.db.listCollections({name:"users"}).toArray();
    if (check.length) {
        await connection.dropCollection("users");
    }
    const users = [];

    for (let i = 0; i < Usernames.length; i++){
        let newUser = {
            username:Usernames[i],
            email:Emails[i],
            thoughts:Sayings[i]
        };
        users.push(newUser);
    }

    await User.collection.insertMany(users);
    console.table(users);
    console.timeEnd("Seeding hath been completed");
    process.exit(0);
});


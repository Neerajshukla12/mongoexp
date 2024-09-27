const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

let allChats=[
    {
    from: "neha",
    to: "priya",
    msg: "send me your exam sheets",
    created_at: new Date(),
},
{
    from: "nelu",
    to: "preeti",
    msg: "send me your photo",
    created_at: new Date(),
},
{
    from: "dinshi",
    to: "billu",
    msg: "hello",
    created_at: new Date(),
},
{
    from: "akash",
    to: "vikash",
    msg: "let play cricket",
    created_at: new Date(),
},
{
    from: "aman",
    to: "gavura",
    msg: "send me your exam notes",
    created_at: new Date(),
},    
];


main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}


Chat.insertMany(allChats);

const express = require("express")
const mongoose = require("mongoose")
const app = express();
const pinRoute = require("./routes/pins");
const userRoute = require("./routes/users");

app.use(express.json()) // we can use anything in json

mongoose.connect("mongodb+srv://dbUser:200118802868@cluster0.cde3rcj.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("MongoDb Connected")
})
.catch((err) => console.log(err));

//app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);


app.listen(8800,()=>{
    console.log("Backend server is running! chandika jayasanka")
})
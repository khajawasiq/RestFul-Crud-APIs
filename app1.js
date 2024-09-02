require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const DB = "mongodb://127.0.0.1:27017/sample";
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Database connected")).catch((error) => console.log(error.message));

const student = new mongoose.Schema({
    name: String,
    age: Number,
    passed: Boolean
});

const Student = new mongoose.model("Student", student);
const add = async () => {
    // const ss = await Student.create({
    //     name: "khaja",
    //     age: 22,
    //     passed: true
    // });
const ss=await Student.find({name:{$eq:"khaja"}});
console.log("🚀 ~ add ~ ss:", ss)
}

add();
const app = express();
const PORT = 5001 || process.env.PORT;

app.get('', (req, res) => {
    res.send("hello world")
});

app.listen(PORT, () => {
    console.log(`App on port ${PORT}`);
});
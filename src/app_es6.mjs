import express from "express";
import mod from "./mod/es6";

const app = express();
const msg = "Hello World! " + mod.getName();

app.get("/", function (req, res) {
    console.log(msg);
    res.send(msg);
});

app.listen(3000, function () {
    console.log('ES6 app listening on port 3000!');
});
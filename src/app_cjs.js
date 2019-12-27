const express = require("express");
const mod = require("./mod/cjs");
const app = express();

const msg = "Hello World! " + mod.getName();

app.get("/", function (req, res) {
    console.log(msg);
    res.send(msg);
});

app.listen(3000, function () {
    console.log("CommonJS app listening on port 3000!");
});
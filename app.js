const express = require("express");

const app = express();

app.get ("/", (req, res) =>
{
    res.send("Hello to this server");
})


app.listen(6900, () =>
{
    console.log("Server is running at port 6900");
})
const express = require("express");
const https = require("https");

const app = express();

app.get ("/", (req, res) =>
{
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Lucknow&units=metric&APPID=6f5f78be2f380779e52bb13e77db7fe6"
    https.get(url, response =>
    {
        response.on('data', (d) => 
        {
            const data = JSON.parse(d);
            console.log(data);
        });
      
    })

    res.send("Hello to this server");
})


app.listen(6900, () =>
{
    console.log("Server is running at port 6900");
})
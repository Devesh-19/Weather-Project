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
            const weatherData = JSON.parse(d);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            res.write(`<h1>The temperature in Lucknow is ${temp} degrees Celsius</h1>`);
            res.write(`<h3>The weather is ${weatherDescription}</h3>`);
            
            res.send();
        });
      
    })

})


app.listen(6900, () =>
{
    console.log("Server is running at port 6900");
})
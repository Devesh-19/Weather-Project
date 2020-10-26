const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get ("/", (req, res) =>
{
    res.sendFile(`${__dirname}/index.html`);
});

app.post("/", (req, res) =>
{
        const query = req.body.cityName;
        const apiKey = process.env.API_KEY;
        const unit = "metric";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${unit}&APPID=${apiKey}`;
        https.get(url, response =>
        {
            response.on('data', (d) => 
            {
                const weatherData = JSON.parse(d);
                const temp = weatherData.main.temp;
                const weatherDescription = weatherData.weather[0].description;            
                const icon = weatherData.weather[0].icon;
                const imgUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

                res.write(`<h1>The temperature in ${query} is ${temp} degrees Celsius</h1>`);
                res.write(`<h3>The weather is ${weatherDescription}</h3>`);
                res.write(`<img src = ${imgUrl}>`);
                
                res.send();
            });            
        });    
});



app.listen(6900, () =>
{
    console.log("Server is running at port 6900");
});
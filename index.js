const express = require("express");
router=express.Router()
const app = express();
const port = 3000;
const path = require('path');

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.get('/',(req, res) =>{
    res.render('index',{ var1:"Home",
        var2:"Menu",
    var3:"Online order",
        var4:"Team",
        var5:"Contact",
        var6:"Welcome!",
        var7:"\"NOT JUST DELICIOUS, BRENT IS DELICIOUS! Confess, when was the last time you had a really tasty meal? At @brent.atyrau our guests enjoy food!",
        var8:"Reservation"
    }
    );
});
app.use(express.static(__dirname+'/public'));

app.get('/menu.html',(((req, res) => {
    res.sendFile(__dirname+'/menu.html')
})))
app.get('/contact.html',(((req, res) => {
    res.sendFile(__dirname+'/contact.html')
})))
app.use(express.static(__dirname+'/public'));
let restaurant={
    name:"Brent Cafe",
    city:"Atyrau",
    country:"Kazakhstan",
    stuff:{fullTime:16, partTime:6}
}
console.log(JSON.stringify(restaurant));
const https = require('https');


    https.get('https://api.openweathermap.org/data/2.5/weather?lat=47.1167&lon=51.8833&appid=c73b4f37869fef7338a458d45365b5ee', (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);

        res.on('data', (d) => {
            process.stdout.write(d);
        });

    }).on('error', (e) => {
        console.error(e);
    });





app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
    );
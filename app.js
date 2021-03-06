//1. Get the express class
var express = require('express');
var path = require('path');
var routes = require('./routes/route.js');

//2. Initiate and assign to an app object
var app = express();

//3. Tell express which view template we are going to use
app.set("view engine","ejs");

//3.1 Let us tell express the asset/resource folder where images, css, js reside
app.use(express.static(path.join(__dirname, 'public')));

//4. Route 1: Which page to render when express '/' route is called
app.get("/",

    //call back function to be called when '/' route is called
    routes.cards
);
app.get("/tamil", routes.cards_tamil);

//5. Decide the port
var port = process.env.PORT || process.env.VCAP_APP_PORT || 8080;

//6. Start the server of express object to listen to port
var server = app.listen(port,
    function(request,response)
    {
        console.log("Catch the action at http://localhost:" + port);
    }
);
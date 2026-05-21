const express = require('express');  // import the express module, which is a web framework and library for building web applications in Node.js

let app = express();  // create a server instance and save it into the app variable

app.get("/", (req, res) =>{   // when the user goes to the root URL, send the home page
    res.send("Home Page");
})

app.get("/about", (req, res) => {   // when the user goes to /about, send the about page
    res.send("About Page");
})

app.listen(3000);  // start the server and listen on port 3000
const express = require('express');

const app = express();   // created a server instance and saved into the app variable

app.get("/", (req, res) => {
    res.send("Hello World")
});

app.get("/about", (req, res) => {
    res.send("About Page")
})

app.listen(3000);  // start the server
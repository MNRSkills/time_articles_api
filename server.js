const express = require("express");

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
    res.send("Hello My Name is Mack")
})

app.get("/articles", async(req, res) => {
    try {
        fetch
    } catch (error) {
        
    }
})

app.listen(PORT, () => {
    console.log(`The server is up on port: ${PORT}`)
});
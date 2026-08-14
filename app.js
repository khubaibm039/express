const express = require("express");
const morgan = require('morgan')

const app = express();

function customMiddleware(req, res, next){
    if(req.url === '/help'){
        res.send("<h1>this page is blogged by admin</h1>")
    }
    next()
}

app.use(customMiddleware)

app.get("/about",morgan('dev'), async (req, res) => {
    //k res.send("<h1>i am about page</h1>");
    res.json({
        message: "i am a message"
    })
});

app.get("/help", async (req, res) => {
    res.send("<h1>i am help page</h1>");
});

app.get("/", async (req, res) => {
    res.send("<h1>this is my first server on express</h1>");
});

app.get("/*splat", async (req, res) => {
    res.status(404).send("<h1>404 Not Found</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
});

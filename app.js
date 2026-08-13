const express = require('express')
const app = express();
const PORT = process.env.PORT || 8080;


app.get('/',async(req, res)=>{
    
    res.send("<h1>this is my first server on express</h1>")
})




app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`)
})
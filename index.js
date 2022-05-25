const express = require("express")
const { port } = require("./config")


const app = express()

app.get("/", function(res,res) {
    return res.json({
        hola:"mundo"
    })
})

app.listen(port, function() {
    console.log("Listening on: http://localhost:"+port);
})


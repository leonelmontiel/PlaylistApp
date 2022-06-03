const express = require("express")
const path = require("path")
const session = require("express-session")
// PORT
const { port, sessionSecret } = require("./config")

// Routes
const auth = require("./routes/auth")


const app = express()

// Usando middlewares
app.use(express.static(path.join(__dirname,"static")))
app.use(express.urlencoded({
    extended:true
}))
app.use(session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false
}))

// Configurando template engine
app.set("view engine","pug")
app.set("views","views")

app.use(auth)

app.get("/",function(req,res){
    console.log(req.session)
    return res.render("home",{
        username:"Tzuzul"
    })
})

app.listen(port,function(){
    console.log("Listening on: http://localhost:"+port)
})
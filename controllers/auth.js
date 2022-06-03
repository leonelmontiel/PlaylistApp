const User = require("../models/User")
const bcrypt = require("bcrypt")
const {query} = require("../libs/database")

class AuthController{

    // static: Nos permite usar atributos y métodos de la clase sin crear una instancia (objeto)
    static async login(req,res){
        const {email, password} = req.body //Destructuring
        const {success, user} = await User.getByEmail(email)

        if(success && user) {
            try {
                if(await bcrypt.compare(password, user.password)) {
                    req.session.loggedIn = true
                    req.session.email = user.email
                    req.session.idUser = user.id
                    return res.redirect("/")
                }
            } catch (error) {
                console.log(error)
            }
        }

        // console.log(req.headers["content-type"])
        return res.render("login",{
            error: "Incorrect credentials",
            user: {
                email,
                password
            }
        })
    }

    static getLoginForm(req,res){
        return res.render("login")
    }

    static getSignUpForm(req,res){
        return res.render("signup")
    }

    static async signUp(req,res){
        const salt = await bcrypt.genSalt(10)
        const password = await bcrypt.hash(req.body.password,salt)
        const data = {
            username:req.body.username,
            email:req.body.email,
            password: password,
            birthday:req.body.birthday
        }
        try {
            const result = await query(
                "INSERT INTO users(??) VALUES(?)",
                [Object.keys(data),Object.values(data)]
            )

            console.log(result)

            req.session.loggedIn = true
            req.session.email = data.email
            req.session.idUser = result.insertId


            return res.redirect("/")

        }catch(error){
            console.log(error)
            return res.render("signup",{
                error:"Verifica los datos",
                user:{
                    username:req.body.username,
                    email:req.body.email,
                    password: req.body.password,
                    birthday:req.body.birthday
                }
            })
        }
    }
}

module.exports = AuthController
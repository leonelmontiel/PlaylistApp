require("dotenv").config()

const config = {
    port: process.env.PORT // Leer variable de entorno del sistema operativo
}

module.exports = config
require("dotenv").config()

const config = {
    port: process.env.PORT, // Leer variable de entorno del sistema operativo
    dbHost: process.env.DB_HOST,
    sessionSecret: process.env.SESSION_SECRET,
    dbPort: process.env.DB_PORT,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME

}

module.exports = config
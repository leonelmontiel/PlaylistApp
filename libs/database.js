const mysql = require("mysql2");
const { dbHost, dbPort, dbUser, dbPassword, dbName } = require("../config");

const connection = mysql.createConnection({
    host: dbHost,
    port: dbPort,
    user: dbUser,
    password: dbPassword,
    database: dbName
})

// gestión de promesa propia
const query = (sql, data) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, data, (error, result) => { //exitoso, fracaso
            if (!!error) {
                console.log(error);
                return reject({
                    error: true,
                    message:error.selMessage
                })
            }else{
                return resolve(result)
            }     
        })       
    });
}

module.exports = {
    connection, 
    query
}
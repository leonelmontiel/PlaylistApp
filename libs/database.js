const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'Leo',
    password: 'Kirarully05',
    database: 'PlaylistApp'
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
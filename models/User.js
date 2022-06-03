const {query} = require("../libs/database")

class USER {
    static async getByEmail(email) {
        try {
            const [user] = await query("SELECT * FROM users WHERE email=?", [email])
            return {
                success:true,
                user
            }
        } catch (error) {
            console.log(error);
            return {
                success:false,
                message: "An error ocurred"
            }
        }
        
    }
}

module.exports = USER
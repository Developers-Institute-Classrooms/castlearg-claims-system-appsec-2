const db = require("../db");
module.exports = {
    getMessages: async () => {
        const result = await db.query("SELECT * from claim");
        return result.rows;
    }
}
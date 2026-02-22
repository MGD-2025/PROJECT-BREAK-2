//Aquí va la estructura de los users
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Email: { type: String, required: true },
  Password: { type: String, required: true },
  Role: { type: String }
})

module.exports = mongoose.model("User", userSchema)


//"Email": "admin@admin.com",
//"Password": "56789",
//"Role": "admin",
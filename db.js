const mongoose = require("mongoose")

const db = async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/db")
}
module.exports = db

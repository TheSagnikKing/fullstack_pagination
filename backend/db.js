const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://pagination_1234:pagination_1234@cluster0.vrt0y39.mongodb.net/")
        console.log(`MongoDB connected on host:${conn.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;
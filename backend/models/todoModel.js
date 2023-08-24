const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    userId: {
        type: String
    },
    id: {
        type: String
    },
    title: {
        type: String
    },
    body: {
        type: String
    }
})

const todoModel = mongoose.model("Todo", todoSchema)
module.exports = todoModel
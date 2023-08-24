const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const connectDB = require("./db")
const todoRoute = require("./routes/todoRoute")

connectDB()

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("hello")
})

app.use("/api",todoRoute)

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`)
})
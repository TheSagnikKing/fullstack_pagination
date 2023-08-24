const express = require("express")
const { postTodo, getTodo } = require("../controllers/todoController")
const router = express.Router()

router.route("/todos").post(postTodo)
router.route("/fetchtodo").get(getTodo)

module.exports = router
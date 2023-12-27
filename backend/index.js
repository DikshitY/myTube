// require("dotenv").config()
import { configDotenv } from "dotenv"
import express from "express"

const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.send("<h1>Hello ji ki haal chaal ? . . . </h1>")
})

app.listen(port, () => {
    console.log(`Your server is running at ${port} port.`)
})
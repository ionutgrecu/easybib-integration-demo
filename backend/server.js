const port=8080
const express = require("express")
const bodyParser = require("body-parser")
const Sequelize = require("sequelize")
const cors = require("cors")
// const {EmployeeModel}=require('db')

const app = express()

app.use((req, res, next) => {
    console.log("Requested " + req.url)
    next()
})
app.use(cors())
app.use(bodyParser.json())

console.log(`Listening on ${port}`)
app.listen(port)
 
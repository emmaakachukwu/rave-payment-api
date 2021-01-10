const express = require("express")
const cors = require('cors')
const app = express()
const axios = require('axios');

const PORT = 3000

app.listen(PORT)
console.log(`Database connected.\nApp running on port: ${PORT} . . .`)

const rave = require("./routes/rave")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

// routes
app.use("/rave", rave)

app.use("/", (req, res) => {
    res.send("<h1>Welcome to LNB</h1>")
})
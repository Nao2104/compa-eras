const express = require("express")
const cors = require("cors")

const app = express()
const port = 5000

//middelwares
require("./database")
app.use(cors())
app.use(express.json())

//rutas
app.get("/api", (req, res) => {
    res.status(200).json({msg: "Nephila v1.0.0"})
})

app.use("/product", require("./routes/product"))
//user routes
app.use("/user", require("./routes/user"))


app.listen(port, () => {console.log("Api corriendo en el puerto", port)})
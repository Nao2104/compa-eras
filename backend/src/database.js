const mongoose = require("mongoose")

const dbName = "NephilaPlus"
const uri = `mongodb+srv://NephilaPlus:1rhfiRZotd1bM7JE@nephilaplus.yx50km7.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose.connect(uri, {useNewUrlParser: true})
    .then((db) => console.log("Conexion a base de datos exitosa"))
    .catch((err) => console.log(err))

module.exports = mongoose
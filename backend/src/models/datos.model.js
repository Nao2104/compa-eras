
const mongoose = require("mongoose")

//schema -> colección


const { Schema } = mongoose
const datosSchema = new Schema(
    {
        date: { type: String, required: true},
        name: { type: String, required: true},
        valorunitario: { type: String, required: true}, // las llaves de lacollecion
        cantidad: { type: String, required: true},
        stock: { type: String, required: true},
        estado: { type: Number, default: 0},
    },
    {
        versionKey: false, // que deseamos capturar cada que se inserte un dato
        timestamps: true
    }
)


module.exports = mongoose.model("Datos", datosSchema)
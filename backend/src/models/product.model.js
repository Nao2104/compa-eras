
const mongoose = require("mongoose")

//schema -> colección


const { Schema } = mongoose
const productSchema = new Schema(
    {
        date: { type: String, required: true},
        detalle: { type: String, required: true},
        valorunitario: { type: String, required: true}, // las llaves de lacollecion
        image: { type: String, required: true},
        stock: { type: Number, default: 0},
        keyWords: { type: Array, default: []},
    },
    {
        versionKey: false, // que deseamos capturar cada que se inserte un dato
        timestamps: true
    }
)


module.exports = mongoose.model("product", productSchema)
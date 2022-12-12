const express = require("express")
const router = express.Router()

const Product = require("../models/product.model")

// router.get(ruta y funcion) listar los productos
router.get("/get-products", async (req, res) => {
    const products = await Product.find()
    return res.status(200).json({data: products})
})



// crear productos 
router.post('/create-products', async (req, res) => {

    const newProduct = new Product(req.body)
    await newProduct.save()
    return res.status(201).json({msg: "Producto guardado exitosamente"})
})

//eliminar producto

router.delete('/delete-products', async (req, res) => {
    await Product.findByIdAndDelete(req.query.id)
    return res.status(200).json({msg: "Producto eliminado", id: req.query.id})
})

//actualizar

router.put('/update-products', async (req, res) => {
    await Product.findByIdAndUpdate(req.query.id, {$set: req.body})
    return res.status(200).json({msg: "Producto actualizado"})
})


// exportar las rutas

module.exports = router
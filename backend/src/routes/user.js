const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

//importar modelo
const User = require("../models/user.model");

//crear usuario
router.post("/signup", async (req, res) => {
  try {
    let { email } = req.body;
    //let email = req.body.email

    email = email.toLowerCase();
    req.body.email = email;

    //obtenber los usuarios que tienen ese email
    let userExists = await User.find({ email: { $eq: email } }); // [], [lhsjdlsahjd
    console.log(userExists);

    //validar si el email existe
    if (userExists.length !== 0) {
      return res.status(400).json({ msg: "El usuario ya existe" });
    }

    const newUser = new User(req.body);
    await newUser.save();

    return res.status(201).json({ msg: "Usuario creado correctamente" });
  } catch (error) {
      console.log(error)
  }
});

router.post("/login", async (req, res) => {
  try {
    // bloque de codigo
    // trhow levanta una excepcion para levantar
    // {//     email:
    //     password:
    // }

     //revisar si el usuario existe
     const user = await User.find({email: req.body.email})

     if(user.length > 0){
        // revisar si la contraseña es correcta
        const isPass = req.body.password === user[0].password// true - correcta || false - incorrecta

        if(isPass){
            let {firstName, lastName, _id, email, isAdmin} = user[0]

            let payload = {
                _id: _id.toString(), //convertir el id de objecID a string
                firstName,
                lastName,
                email,
                isAdmin
            }

            console.log(payload)

            // sucess - generar el token
            const token = jwt.sign(payload, "llave-secreta")
            return res.status(200).json({token: token})
        }
        // error- la contraseña es incorrecta
        return res.status(401).json({msg: "La contraseña es incorrecta"})
     }
    return res.status(401).json({msg: "El usuario no existe"})

    // error- la cuenta no existe
  
    } catch (error) {
      console.log(error);
      // bloque de codigo en el catch
    }
  });
  
  module.exports = router;

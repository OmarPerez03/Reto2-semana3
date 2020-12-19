const { Usuario } = require('../models/');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
    
    list : async (req, res, next) => {
        try {
            const re = await Usuario.findAll()
            res.status(200).json({re})                
        } catch (error) {
            res.status(500).json({'error':"Paso algo..."})
            next()
        }
    },

    registrer : async (req, res, next) => {
        res.status(200).send('lo hacemos en el sprint 3')

    },

    login : async (req, res, next) => {
        try {
            if(user){
                const contrasnhaValida = bcrypt.compareSync(req.body.password, user.password)
            if(contrasnhaValida){
                const token = jwt.sign({
                    id: user.id,
                    username: user.username,
                    email: user.username,
                    rool: user.rol,
                },  'mipalabrasecreta', {
                    expiresIn :3600
                })
                res.status(200).send({
                    auth: true,
                    tokenReturn : token,
                    user : user
                })
            } else{
                res.status(401).send({auth : false, tokenReturn: null, reason:"Invalid Password"})
            }
            } else{
                res.status(404).send('Usuario no existe')
            }
        } catch (error) {
            res.status(500).json({'error':'Paso algo...'})
            next()
        }
    }
}
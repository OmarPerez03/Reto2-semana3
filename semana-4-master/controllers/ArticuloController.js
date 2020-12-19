const { Articulo } = require('../models/');
const articulo = require('../models/articulo');

module.exports = {

    list : async (req, res, next) => {
        try {
            const re = await Articulo.findAll()
            res.status(200).json({re})                
        } catch (error) {
            res.status(500).json({'error':"Paso algo..."})
            next()
        }
    },

    add : async (req, res, next) => {
        try {
            const re = await Articulo.create(req.body)
            res.status(200).json(re) 

        } catch (error) {
            res.status(500).json({'error':'paso algo....'})
            next(error)
        }
    },

    udpate : async (req, res, next) => {
        try {
                const re = await Articulo.udpate({nombre: req.body.nombre,descripcion: req.body.descripcion}, {where: {id: req.body.id}})
                res.status(200).json(re)
            } catch (error) {
            res.status(500).json({'error':'paso algo....'})
            next()
        }
    },

    activate : async (req, res, next) => {
        try {
            
        } catch (error) {
            res.status(500).json({'error':'paso algo....'})
            next()
        }
    },

    desactivate : async (req, res, next) => {
        try {
            
        } catch (error) {
            res.status(500).json({'error':'paso algo....'})
            next()
        }
    }

}
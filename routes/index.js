'use strict'

const express = require('express')
const ProductCtrl = require('../controllers/product')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/product', ProductCtrl.getProduct)
api.get('/product/:productId', ProductCtrl.getProductId)
api.post('/product', ProductCtrl.saveProduct)
api.put('/product/:productId', ProductCtrl.updateProduct)
api.delete('/product/:productId', ProductCtrl.deleteProduct)
api.get('/private', auth, (req, res) => {
  res.status(200).send({message: 'Tienes Acceso'})
})

module.exports = api

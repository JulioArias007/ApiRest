'use strict'

const express = require('express')
const ProductCtrl = require('../controllers/product')
const api = express.Router()

api.get('/product', ProductCtrl.getProduct)
api.get('/product/:productId', ProductCtrl.getProductId)
api.post('/product', ProductCtrl.saveProduct)
api.put('/product/:productId', ProductCtrl.updateProduct)
api.delete('/product/:productId', ProductCtrl.deleteProduct)

module.exports = api

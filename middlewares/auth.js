'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config')

function isAuth (req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send({message: 'No tiene autorizacion'})
  }

  const token = req.headers.authorization.split('')[1]
  const playload = jwt.decode(token, config.SECRET_TOKEN)

  if (playload.exp <= moment().unix()) {
    return res.status(401).send({message: 'El Token ha expirado'})
  }

  req.user = playload.sub
  next()
}

module.exports = isAuth

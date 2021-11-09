const express = require('express')
const homepageController = require('../controllers/homepageController')

const router = express.Router()

const initWebRoute = (app) => {
  router.get('/', homepageController.getHomepage)
  

  return app.use('/', router)
}

module.exports = initWebRoute
const express = require('express')
const homepageController = require('../controllers/homepageController')
const chatbotController = require('../controllers/chatbotController')

const router = express.Router()

const initWebRoute = (app) => {
  router.get('/', homepageController.getHomepage)
  router.get('/webhook', chatbotController.getWebhook)
  router.post('/webhook', chatbotController.postWebhook)
  

  return app.use('/', router)
}

module.exports = initWebRoute
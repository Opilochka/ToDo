const express = require('express')
const controller = require('../controllers/task')
const router = express.Router()

router.get('/', async(reg, res) => {
    res.render('card', {
        title: 'ToDo',
        isCard: true
    })
})

router.post('/cards', controller.savMap)

module.exports = router
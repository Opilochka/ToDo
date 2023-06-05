const express = require('express')
const controller = require('../controllers/auth')
const router = express.Router()

router.get('/login', async(req, res) => {
    res.render('auth/login', {
        title: 'Вход',
        isLogin: true
    })
})
router.post('/login', controller.login)

router.get('/logout', async (req, res) => {
    req.session.destroy(() => {
        res.redirect('/auth/login#login')
    })
})


router.post('/register', controller.register)

module.exports = router
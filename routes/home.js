const {Router} = require('express')
const router = Router()

router.get('/', async(reg, res) => {
    res.render('index', {
        title: 'ToDo',
        isHome: true,
        isLogin: false
    })
})

module.exports = router
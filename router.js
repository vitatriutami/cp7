const express = require('express')
const app = express()
const authenticator = require('./lib/authenticator')


// PAGES
router.get('/', page.home)
router.get('/login', page.login)
router.get('/register', page.register)
router.get('/dashboard', authenticator, page.dashboard)
router.get('/game/rps', authenticator, page.game.rps)

// API Authentication
router.post('api/v1/login', auth.login)

// API USERNAME
router.post('api/v1/users', user.create)
router.get('api/v1/users', user.readAll)
router.get('api/v1/users/:id', user.readById)
router.put('api/v1/users/:id', user.update)
router.delete('api/v1/users/:id', user.delete)

app.listen(8000,
    console.log(`server listening on port`, 8000)
    )
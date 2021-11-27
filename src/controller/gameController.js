const express = require('express')

const Game = require('../models/games')

const router = express.Router()

router.post('/games', async (req, res) => {
    try {
        const games = await Game.create(req.body)
        return res.send({ game })
    } catch (err) {
        return res.status(404).send({ error: 'Registration Failed' })
    }
})

module.exports = app => app.use('/', router)
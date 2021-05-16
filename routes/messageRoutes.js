const express = require('express')
const router = express.Router()
 const message = require('../models/Message')


router.get('/', async (req, res) => {
    let conversation = await message.find({})
    res.send(conversation)    
})

router.post('/', async (req, res) => {
    let messageToCreate = req.body
    console.log("create new conversation",messageToCreate )
    let newMessage = new message(messageToCreate)
    await newMessage.save()
    console.log("what is newMessage", newMessage)
    res.status(200).end()
})

module.exports = router
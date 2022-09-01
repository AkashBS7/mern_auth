const express = require('express')
const userRouter = express.Router()
const {registerUser, getMe, loginUser} = require('../controllers/userController')
const {protect} = require('../middleware/authMiddleware')

userRouter.post('/', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/me', protect, getMe)

module.exports = userRouter
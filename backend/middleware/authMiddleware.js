const jwt = require('jsonwebtoken')
const aysncHandler = require('express-async-handler')
const User = require('../model/userModel')

const protect = aysncHandler(async (req, res, next) => {
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token = req.headers.authorization.split(' ')[1]

            const decoded = jwt.decode(token, process.env.JWT_SECRET)

            req.user = await User.findById(decoded.id).select('-password')

            next()
        } catch (error) {
            console.log(error);
            res.status(401)
            throw new Error('Not Authorized')
        }
    } 

    if(!token){
        res.status(401)
        throw new Error('Not Authorized or No Token Provided')
    }

})

module.exports = {protect}
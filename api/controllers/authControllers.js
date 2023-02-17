require('dotenv').config()

const express = require('express');
const user = require('../models/user')
const validation = require('../utils/validation')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const maxAge = 3 * 24 * 60 * 60

const createJwtToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET, {
        expiresIn: maxAge
    })
}

module.exports.post_signUp = async (req, res) => {

    const { email, password } = req.body

    /* validate email and password */
    const { error: emailError } = validation.emailValidation({ email: email });
    if (emailError) return res.status(400).json({ error: emailError.message });
    const { error: passwordError } = validation.passwordValidation({ password: password })
    if (passwordError) return res.status(400).json({ error: passwordError.message })

    /* Check if user already exists */
    const duplicate = await user.findOne({ email: email })
    if (duplicate) return res.status(403).json({ error: 'Email already registred' })

    try {

        /* hash password */
        const salt = 10
        const hashedPassword = await bcrypt.hash(password, salt)

        /* Save user to DB */
        const User = await user.create({
            email: email,
            password: hashedPassword,
        })

        const token = createJwtToken(User._id)
        
        //res.json(User) for testing purposes
        res.cookie('jwt', token, { httpOnly: false, maxAge: maxAge * 1000 })
        res.send('cookie sent')
    } catch (e) {

        console.log(e) // or save to log and send it to admin panel

        res.status(404).json({ error: 'an error has occurred' })

    }
}
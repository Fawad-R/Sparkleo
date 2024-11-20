const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const connection = require('../config/db');
const dotenv = require('dotenv');

dotenv.config();
const router = express.Router();

// @route POST /api/auth/register
// @desc Register a new user
router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user already exists
        connection.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
            if (err) throw err;
            if (results.length > 0) {
                return res.status(400).json({ msg: 'User already exists' });
            }

            // Hash the password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // Insert the new user into the database
            connection.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword], (err, results) => {
                if (err) throw err;
                res.status(201).json({ msg: 'User registered successfully' });
            });
        });
    } catch (err) {
        res.status(500).json({ msg: 'Server error', error: err });
    }
});

// @route POST /api/auth/login
// @desc Authenticate user and get token
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    // Check if user exists
    connection.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
        if (err) throw err;
        if (results.length === 0) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Compare the entered password with the hashed password in the database
        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Generate a JWT
        const payload = {
            user: {
                id: user.id,
                email: user.email
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    });
});

module.exports = router;

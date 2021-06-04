const express = require('express');
const router = express.Router();

const {
    registerUser,
    loginUser,
    getUserProfile,
    logout
} = require('../controllers/authController');

const { isAuthenticatedUser } = require('../middleware/auth');

router.route('/login').post(loginUser);
router.route('/register').post(registerUser);

router.route('/me').get(isAuthenticatedUser, getUserProfile);
router.route('/logout').get(isAuthenticatedUser, logout);




module.exports = router;
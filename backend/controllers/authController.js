const User = require('../models/user');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require("../middleware/catchAsyncError");
const sendToken = require('../utils/jwtToken');

/// Register a user  =>   /api/v1/register
exports.registerUser = catchAsyncError(async (req, res, next) => {

    
    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password,
    });

    sendToken(user, 200, res);
});


// Login user  =>  /api/v1/login
exports.loginUser = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;

    // Checks if email or password is entered by user
    if (!email || !password) {
        return next(new ErrorHandler('Please enter email & Password', 400));
    }

    // Finding user in database
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
        return next(new ErrorHandler('Invalid Email or Password.', 401));
    }

    // Check if password is correct
    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHandler('Invalid Email or Password', 401));
    }

    sendToken(user, 200, res);
});

// Get current user profile   =>   /api/v1/me
exports.getUserProfile = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user,
    });
});


// Logout user   =>   /api/v1/logout
exports.logout = catchAsyncError(async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        message: 'Logged out successfully.',
    });
});
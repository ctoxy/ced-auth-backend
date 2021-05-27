const express = require('express');
const router = express.Router();

// import controller
const { signup, accountActivation, signin, forgotPassword, resetPassword,  googleLogin, facebookLogin} = require('../controllers/auth');

// import validators to check the validity of the request
const { userSignupValidator, userSigninValidator,forgotPasswordValidator, resetPasswordValidator } = require('../validators/auth');
const { runValidation } = require('../validators');

//route pour l'inscription
router.post('/signup', userSignupValidator, runValidation, signup);
// route pour l'authentification
router.post('/signin', userSigninValidator, runValidation, signin);
// route pour la validation de l'inscription
router.post('/account-activation', accountActivation);
// forgot reset password
router.put('/forgot-password', forgotPasswordValidator, runValidation, forgotPassword);
router.put('/reset-password', resetPasswordValidator, runValidation, resetPassword);

// google and facebook
router.post('/google-login', googleLogin);
router.post('/facebook-login', facebookLogin);


module.exports = router;
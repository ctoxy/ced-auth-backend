const express = require('express');
const router = express.Router();

// import controller
// import du token secret 
const { requireSignin, adminMiddleware } = require('../controllers/auth')
const { read, update } = require('../controllers/user');


//route pour user by id
router.get('/user/:id',requireSignin, read);
// permet a un user de mettre a jour son profil
router.put('/user/update',requireSignin, update);
// permet a admin de mettre a jour adminMiddleware prend en compte le role pour autoriser
router.put('/user/update',requireSignin, adminMiddleware, update);

module.exports = router;
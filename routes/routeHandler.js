const express = require('express');
const router = express.Router();

//const verifyJWT = require('../middleware/verifyJWT');

const userController = require('../controllers/userController');
const urlController = require('../controllers/urlController');


router.post('/register', userController.createUser);
router.get('/getallusers', userController.getAllUsers);
router.get('/logout', userController.handleLogout);

router.get('/getallurls', urlController.getAllUrls);
router.post('/new', urlController.createUrl);


router.get('*', urlController.redirectUrl);

//router.get('/list', Controller.getList);

//router.use('/admin', verifyJWT, require('./admin'));

module.exports = router;
const path = require('path');
const router = require('express').Router();

router.get('/profile', (req, res)=> res.render('profile'));

module.exports = router;
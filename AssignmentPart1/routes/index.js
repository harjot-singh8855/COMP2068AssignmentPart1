'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});


router.get('/home', function (req, res) {
    res.render('Home', { Home: 'Home Page' });
});

router.get('/service', function (req, res) {
    res.render('service', { service: 'Service Page' });
});

router.get('/Projects', function (req, res) {
    res.render('Projects', { Projects: 'Projects' });
});

router.get('/ContactMe', function (req, res) {
    res.render('ContactMe', { ContactMe: 'Contact Page' });
});

router.get('/AboutMe', function (req, res) {
    res.render('AboutMe', { About: 'About Me Page' });
});





module.exports = router;

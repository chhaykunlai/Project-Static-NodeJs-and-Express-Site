const express = require('express');
const router = express.Router();

const { projects } = require('../data.json');

router.get('/', (req, res) => {
    res.render('index', { projects });
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/project/:id', (req, res) => {
    project = projects[req.params.id];
    res.render('project', { project });
});

module.exports = router;
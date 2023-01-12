const express = require('express');
const router = express.Router();
const Count = require('../../models/Count');

router.get('/', (req, res)=>{
    res.render('index');
});

router.post('/add-count', (req, res)=>{
    Count.create({
        count: 1
    }, (count)=>{
        res.send(count);
    });
});

module.exports = router;
const express = require('express');
// create new router
const router = express.Router();

// creating a JSON data array
let accounts=[
    {id:1,name:'alex',deposit:5},
    {id:2,name:'sarah',deposit:5},
    {id:3,name:'jim',deposit:15}
    ];
    

router.get('/', function (req, res) {
    res.status(200).json(accounts);
});


router.get('/:id', function (req, res) {
    
    let found = accounts.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;
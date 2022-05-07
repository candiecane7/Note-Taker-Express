const router = require('express').Router();
const { notes } = require("../../db/db.json");
const fs = require("fs");

router.get('/notes', (req, res)=>{
    res.json(notes);
});

router.post('/notes', (req, res)=>{
console.log(req.body);
})

module.exports = router;
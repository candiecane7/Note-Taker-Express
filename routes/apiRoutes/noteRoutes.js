const router = require('express').Router();
let notes = require("../../db/db.json");
const fs = require("fs");
const uniqid = require('uniqid');
const path = require('path');

router.get('/notes', (req, res)=>{
    res.json(notes);
});

router.post('/notes', (req, res)=>{
req.body.id = uniqid();
notes.push(req.body);
fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify(notes, null, 2)
)


})

module.exports = router;
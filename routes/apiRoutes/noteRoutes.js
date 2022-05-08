const router = require('express').Router();
let notes = require("../../db/db.json");
const fs = require("fs");
const uniqid = require('uniqid');
const path = require('path');

//route to get notes
router.get('/notes', (req, res) => {
    res.json(notes);
});

//route to add a new note
router.post('/notes', (req, res) => {
    req.body.id = uniqid();
    notes.push(req.body);
    fs.writeFileSync(
        path.join(__dirname, "../../db/db.json"),
        JSON.stringify(notes, null, 2));
    res.json(notes);
});


//route to delete a note based on id
router.delete('/notes/:id', (req, res) => {
    noteIndex = notes.findIndex(note =>{
        return note.id === req.params.id
    })
    notes.splice(noteIndex, 1);
    fs.writeFileSync(
        path.join(__dirname, "../../db/db.json"),
        JSON.stringify(notes, null, 2));
    res.json(notes);
});


module.exports = router;
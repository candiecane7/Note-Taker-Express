const path = require('path');
const router = require('express').Router();

//route to main landing page
router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

//route to notes page
router.get('/notes', (req,res)=>{
    res.sendFile(path.join(__dirname, "../../public/notes.html"));
});
//re-route to landing page if anything not covered in routes is entered in url
router.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, '../../public/index.html'))
})

module.exports = router;

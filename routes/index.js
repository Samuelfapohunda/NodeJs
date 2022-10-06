const express = require("express")
const bookRouter = require("./book")
const router = express.Router()
const path = require("path")


router.get('/', (req,res) => {
    res.render('index', {name: "Samuel"});
    
})

router.use(bookRouter);


router.all('/*', (req, res) => {
       res.send('Page not found');
})




module.exports= router;
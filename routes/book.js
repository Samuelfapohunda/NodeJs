const express = require("express");
const { ObjectId } = require("mongodb");
const bookRouter = express.Router()
const connect = require("./../database/db")
// const  ObjectID  = require("mongodb").ObjectId
// var { ObjectId } = require('mongodb')




bookRouter
   .route("/book")
   .get(async (req,res) => {
     const db = await connect();
     const books = await db.collection("book").find().toArray();
     res.json(books);
    // res.send('All books')
})
  .post(async (req,res) => {
     
    const db = await connect();
    const data = {
        title: 'Alex Rider',
        author: "Anthony Horowitz"
    }
    await db.collection("book").insertOne(req.body)
    res.json({ data:"Book is stored" })
})



bookRouter
.route('/:id')
.get(async (req,res) => {  
      const id = req.params.id;
     const db = await connect();
    const book = await db.collection("book")
    .find({ _id: ObjectId(id) })
    .toArray();
    res.json(book)
   
 
})
.patch((req,res) => {
    res.send(`Single book of ${req.params.id} is updated`)
})

.delete((req,res) => {
    res.send(`Single book of ${req.params.id} is deleted`)
})


module.exports= bookRouter;
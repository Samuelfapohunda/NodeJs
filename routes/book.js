const express = require("express");
const bookRouter = express.Router()
const BookController = require('../controllers/BookController')
const authMiddleware = require("../middleware/authMiddleware")

bookRouter
.use(authMiddleware)
   .route("/")
   .get(BookController.index)
  .post(BookController.store)


bookRouter
.route('/:id')
.get(BookController.show)
.patch(BookController.update)
.delete(BookController.delete)


module.exports= bookRouter;
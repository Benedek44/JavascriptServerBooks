import express from 'express'
import * as bookController from '../controllers/booksController.js'

const router = express.Router()

router.get('/', bookController.getAllBooks)
    
router.get('/:id', bookController.getBookById)

router.post('/', bookController.createBook)

router.put('/:id', bookController.updateBook)

router.delete('/:id', bookController.deleteBook)

export default router
import express from 'express'
import booksRoutes from './routes/books.js'

const app = express()
app.use(express.json())
app.use('/books', booksRoutes)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})


import express from 'express'
import '@controllers/UserController'

const app = express()
app.get('/', (req, res) => {
  return res.json({ message: 'helo world' })
})

app.listen(3333, () => console.log('✅ Server started at http://localhost:3333 🌏'))

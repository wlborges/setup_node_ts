import '@controllers/UserController'
import express from 'express'

const app = express()
app.get('/', (req, res) => {
  return res.json({ message: 'Hello world! Coolify!' })
})

app.listen(3333, () => console.log('✅ Server started at http://localhost:3333 🌏'))

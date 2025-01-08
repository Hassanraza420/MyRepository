require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/facebook' ,(req ,res) =>{
    res.send('HasssanKhichi')
})

app.get('/login', (req , res) =>{
    res.send('<h1>please login at NexGen Squad</h1>')
})
app.get('/Youtube', (req , res) =>{
    res.send('<h1>Welcome youtube</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
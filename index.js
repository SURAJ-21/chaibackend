require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const package={
  "name": "chaibackend",
  "version": "1.0.0",
  "description": "First Node project(chai and code)",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "author": "Suraj raj",
  "license": "ISC",
  "dependencies": {
    "dotenv": "^16.3.2",
    "express": "^4.18.2"
  }
}

app.get('/', (req, res) => {
  res.send('Hello World!!')
})

app.get('/twitter', (req, res) => {
  res.send('Hello World!!!!!!')
})

app.get('/package',(req,res)=>{
  res.jspn(package)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
//page/id
//page/id/token/id

const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/page/:id', (req, res) => {
  res.send('page view')
})

app.get('/page/:id/token/:id', (req, res) => {
    res.send('token view')
  })
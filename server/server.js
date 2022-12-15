require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const cors=require('cors')
const {ROLLBAR_KEY}=process.env

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '6523647b0364427d86269150c481018f',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.use(express.static('public'))

app.get('/',(req,res)=> {
    res.sendFile(path.join(_dirname,'../public/index.html'))
})

//app.get('/styles')
app.listen(4000, () => console.log(`gliding up on 4000`))

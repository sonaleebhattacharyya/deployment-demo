const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('public'))

app.get('/',(req,res)=> {
    res.sendFile(path.join(_dirname,'../public/index.html'))
})

//app.get('/styles')
app.listen(4000, () => console.log(`gliding up on 4000`))

const express = require('express')
const path = require('path')
const app = express()

app.use('/', express.static(path.join(__dirname, '/')))
app.listen(1337, function(){
	console.log('Haha, hacking on port 1337')
})

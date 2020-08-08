const express = require('express')
const app = express()
var path = require('path')
var view = __dirname + "/view/"

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/cv-static', (req,res) => res.sendFile(path.join(view + 'cv.html')))

app.listen(8080, () => console.log('Example app listening on port 8080!'))
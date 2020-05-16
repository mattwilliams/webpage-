const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const PersistedData = require('./src/persistedData')
console.log(PersistedData)

app.use('/static', express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
console.log("_dirname")
console.log(__dirname)

app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'))
app.get('/timeline', (req, res) => res.sendFile(__dirname + '/public/timeline.html'))
app.get('/data/:selection', (req, res) => {
    console.log("handling data route")
    console.log(req.params)
    res.send(req.params.selection)
    var selectionString = req.params.selection || 'noSelection'
    PersistedData.writeHistory(selectionString)
}) 


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
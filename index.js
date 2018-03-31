const express = require('express')
const app = express()
const fs = require('fs')
const test = JSON.parse(fs.readFileSync('./test.json'))
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
   res.send(test)
})

app.listen(port, () => {
    console.log('It\'s Lit!!! 🔥🔥🔥')
})

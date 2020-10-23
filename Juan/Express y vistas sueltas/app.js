const express = require('express')
const app = express()
const path = require('path')

const port = 3000


app.use(express.static('public'));


app.get('/mercadoliebre', (req, res) => {
    res.sendFile(path.join(__dirname,'/Views/mercadoliebremenu.html'))
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/Views/index.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname,'/Views/register.html'))
})

app.post('/register', (req, res) => {
    res.send('El usuario se creo correctamente')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
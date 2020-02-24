
require('./config/config')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())



app.get('/temperatura', (req, res)=>{
    res.json({
        temperatura : 23.00
    })
})

app.post('/temperatura', (req, res) =>{
    let body = req.body

    if(body.temperatura === undefined){
        res.status(400).json({
            ok: false,
            messaje: 'La temperatura es necesaria'
        })
    }else{
        res.json({
            body
        })
    }

    
})

app.put('/temperatura/:id', (req, res) =>{

    let id = req.params.id
    res.json({
        id
    })
})

app.delete('/temperatura', (req, res) =>{
    res.json('Delete Temperatura')
})


app.listen(process.env.PORT, ()=>{
    console.log('Escuchando en puerto ', process.env.PORT)
})
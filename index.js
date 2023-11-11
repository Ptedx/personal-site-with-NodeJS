const bodyParser = require('body-parser')
const express = require('express')
const pg= require('pg-promise')()
const app = express()

app.set('views',__dirname+'/views')
app.set('view engine', 'ejs')
app.use(express.static(__dirname+'/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req, res)=>{
    res.render('index')
})

app.listen(3000,()=>{
    console.log('Ouvindo na porta 3000')
})

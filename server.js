const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.set('views',__dirname+'/views')
app.set('view engine', 'ejs')
app.use(express.static(__dirname+'/public'))
app.use(express.static(__dirname+'/public/js/animations.js'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req, res)=>{
    res.render('index')
})

app.get('/the-luxury', (req,res)=>{
    res.render('the-luxury')
})

app.get('/the-luxury/response',(req,res)=>{
    res.render('the-luxury-response')
})

app.get('/star-plus', (req,res)=>{
    res.render('starplus')
})

app.get('/star-plus/login',(req, res)=>{
    res.render('starplus-login')
})

app.get('/star-plus/login-success', (req, res)=>{
    res.render('starplus-login-success')
})

app.get('/star-plus/register', (req,res)=>{
    res.render('starplus-register')
})

app.get('/star-plus/register-success',(req,res)=>{
    res.render('starplus-register-success')
})

app.listen(3000,()=>{
    console.log('Ouvindo na porta 3000')
})

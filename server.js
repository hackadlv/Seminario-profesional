const express = require ('express')
const bodyParser = require('body-parser')

const router = express.Router()

var app = express()
app.use (bodyParser.json() )
app.use (bodyParser.urlencoded({extended:false}) )
app.use ( router )

router.get('/carrera' , function(req, res){
    console.log( req.headers , req.headers['authorization'] )
    
    res.send('Lista de Carreras.')
})
router.post('/carrera' ,function(req, res){
    if (req.query.error == 'ok'){
        res.status(500).send( {tipo_error:1, mensaje_error:'Error en el Servidor', mensaje_exito: 'Añadido exitosamente'})
    }else{
        res.status(200).send( {tipo_error:0, mensaje_error:'', mensaje_exito: 'Añadido exitosamente'})
    }
    
})
app.use( '/', express.static('public') )

app.listen( 5000 )
console.log( 'La aplicacion esta escuchando en http://localhost:5000' )

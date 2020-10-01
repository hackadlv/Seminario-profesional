const express = required('expressp')

const router = express.Router()

var app = express()
app.use ( router )

app.listen( 5000 )
console.log( 'La aplicacion esta escuchando en http://localhost:5000' )
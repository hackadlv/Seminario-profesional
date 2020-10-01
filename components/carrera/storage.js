const list = []

function addCarrera( objeto ){
    list.push( objeto )
}

function getCarrera() {
    return list
}

function updateCarrera( objeto ){
    for( let i=0; i<list.length; i++) {
        if(list[i].nombre == objeto.carrera){
            list[i] = objeto
        }
    }
    list.find()
}

function deleteCarrera(){
    for( let i=0; i<list.length; i++) {
        if(carrera.nombre == objeto.carrera){
            delete list[i]
        }
    }
}

module.exports= {
    add: addCarrera,
    get: getCarrera,
    update: updateCarrera,
    delete: deleteCarrera,
}
let notas = []
// let notas = [13, 8, 18, 20, 5]

 
 /*El push sirve para agregar elementos en un arreglo*/
 notas.push("hola")
 notas.push(8)
 notas.push(18)
 notas.push(20)
 notas.push(5)
 notas[5] = 14


 // Un arreglo es una lista de cosas, en cambio un objeto es una lista de cosas

 //objetos

 let alumno1 = { nombre: "Ernesto", apellido: "Lopez", edad: 22 }
 alumno1.nota = 12 //De esta manera se puede poner datos sin necesidad de hacer una lista
 let alumno2 = { nombre: "Pedro", apellido: "Navaja", edad: 80 }
 let alumno3 = {}
 alumno3.nombre = "Lorenzo"
 alumno3.apellido = "Cardenas"
 alumno3.edad = 33

 alumnos = []

 for(let i = 0; i < 5; i++) {
     let alumno = {}
     alumno.nombre = "nombre-" + i
     alumno.apellido = "apellido-" + i
     alumno.edad = parseInt(30 * Math.random())

     alumnos.push(alumno)
 }

 console.log(alumnos)



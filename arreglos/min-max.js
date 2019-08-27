console.log('Hello World')


let a = [4, 8, 1, 5, 10, 3]
console.log(getMin(a)) 
console.log(getMax(a)) // Aquí llamamos al método para que se muestre en la consola

function getMax(a) {

    if (a.length == 0) return "Error" // Para indicar si es que en caso el arreglo no tiene ningún valor

    let max = a[0]
    for ( let i = 0; i < a.length; i++) {
          if (a[i] > max) max = a[i]
    }
    return max
}

function getMin(a) {

    if (a.length == 0) return "Error"
    
    let min = a[0]
    for ( let i = 0; i < a.length; i++) {
          if (a[i] < min) //Aquí se pregunta si el valor es el mínimo
          min = a[i] //Aquí según sea si es mínimo o no, el nuevo valor se reemplaza en el mínimo
        }
         
    return min
} 
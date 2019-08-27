// Hallar el mínimo/máximo de los valores procesados

let a = [4, 8, 2, 5, 10, 3]
let average = getAverage(a)

console.log(average)
console.log(getMinValue(a))

function getAverage(a){
    let suma = 0
    for (let i = 0; i < a.length; i++) {
        suma = suma + a[i] // sum += a[i]
    }
  return suma / a.length
}



function getMinValue(a) {

    if (a.length == 0) return "Error"
    
    let min = a[0] // crear variable para almacenar el mínimo
    let minIndex 
    
    for(let i = 0; i < a.length; i++){
        if (distanceToAverage(a[i]) < min) {
            min = distanceToAverage(a[i]) 
            minIndex = i 
        } 
    }
    return minIndex
}

function square(n) {
    return n * n
}

function distanceToAverage(n) {
    return Math.abs(n - average)
}
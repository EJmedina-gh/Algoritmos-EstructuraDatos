//Hallar el mínimo de los cuadrados de los valores

let a = [4, 8, 2, 5, 10, 3]
console.log(getMin(a)) 
console.log(getMax(a)) 

function getMax(a) {

    if (a.length == 0) return "Error" 

    let max = a[0]
    for ( let i = 0; i < a.length; i++) {
          if (square(a[i]) > max) max = square(a[i])
    }
    return max
}

function getMin(a) {

    if (a.length == 0) return "Error"
    
    let min = a[0]
    for ( let i = 0; i < a.length; i++) {
          if (square(a[i]) < min) min = square(a[i]) 
        }
         
    return min
} 

function square(n) {
    return n * n
}


let notas = [16, 17, 15, 13, 16, 20, 18, 11]
let b = [1, 5, 7, 4]

console.log(getMin(b)) 
console.log(getMax(b)) 

function getMax(b) {

    if (b.length == 0) return "Error" 

    let max = nota(b[0])
    for ( let i = 0; i < b.length; i++) {
          if (nota(b[i]) > max) max = nota(b[i])
    }
    return max
}

function getMin(b) {

    if (b.length == 0) return "Error"
    
    let min = nota(b[0])
    for ( let i = 0; i < b.length; i++) {
          if (nota(b[i]) < min) min = nota(b[i]) 
        }
         
    return min
} 

function nota(n) {
    return notas[n]
}
// obtener el índice del mínimo/máximo
let a = [4, 8, 1, 5, 10, 3]
console.log(getMinIndex(a)) 
console.log(getMaxIndex(a))


function getMinIndex(a) {

    if (a.length == 0) return "Error"
    
    let min = a[0]
    let minIndex = a[0]
    for(let i = 0; i < a.length; i++){
        if (a[i] < min) {
            min = a[i]
            minIndex = i
        } 
    }
    return minIndex
}

function getMaxIndex(a) {

    if (a.length == 0) return "Error"

    let max = a[0]
    let maxIndex = a[0]
    for(let i = 0; i < a.length; i++){
        if (a[i] > max) {
            max = a[i]
            maxIndex = i
        } 
    }
    return maxIndex
}


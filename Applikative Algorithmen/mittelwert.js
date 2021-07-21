function mittelwert(array, i = 0, sum = 0) {
    if(i >= array.length)
        return sum/array.length
    else
        return mittelwert(array, i + 1, sum + array[i])
}

console.log(mittelwert([179, 171, 177, 183, 180]))
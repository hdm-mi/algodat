const arrays = [[], [0], [2, 1], [1, 2], [1, 2, 3], [2, 4, 8, 3, 1], [7, 9, 0, 9, 8, 4, 0, 0, 9, 7, 7, 2, 2, 7, 2, 4, 7, 0, 8, 5, 5, 3, 2, 8, 6, 8, 6, 3, 3, 6, 4, 4, 3, 5, 1, 8, 9, 0, 1, 4, 7, 1, 5, 2, 4, 8, 5, 0, 5, 3, 4, 9, 9, 5, 0, 3, 9, 1, 7, 4, 0, 6, 6, 8, 9, 6, 3, 1, 8, 6, 6, 8, 0, 6, 1, 5, 4, 7, 1, 9, 4, 2, 7, 7, 8, 9, 2, 4, 5, 8, 8, 5, 2, 8, 0, 4, 9, 3, 9, 6]];



function bubbleSort(array) {
    for (let n = 1; n < array.length; n++) {
        for (let i = 0; i < array.length - n; i++) {
            if (array[i] > array[i + 1]) {
                let smallerNumber = array[i + 1]
                array[i + 1] = array[i]
                array[i] = smallerNumber
            }
        }
    }

    return array
}

function bubbleSortSpecial(array) {
    for(let i = 0; i < array.length; i++)
        for(let y = 0; y < array.length; y++)
            if(array[i] < array[y])
                [array[i], array[y]] = [array[y], array[i]]
    return array
}

arrays.forEach(array => {
    console.log(bubbleSort(array))
})
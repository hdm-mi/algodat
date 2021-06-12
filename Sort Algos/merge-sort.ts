const ARRAY = [3, 6, 3, 6, 1, 7, 4]


function merge(left: number[], right: number[]): number[] {
    let res: number[] = []

    while(left.length && right.length) 
        if(left[0] < right[0])
            res.push(left.shift())
        else
            res.push(right.shift())
    
    return [...res, ...left, ...right]
}

function mergeSort(array: number[]): number[] {
    const half = array.length / 2

    if(array.length < 2)
        return array
    
    const left = array.splice(0, half)
    return merge(mergeSort(left), mergeSort(array))
}

console.log(mergeSort(ARRAY))
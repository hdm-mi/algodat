loop(25)
function loop(nums, i = 0) {
    if(i >= nums)
        return 
    else
        return loop(nums, i + 1)
}

loopReverse(25)
function loopReverse(i) {
    if(i < 1)
        return i
    else
        return loopReverse(--i)
}

console.log(loopArray(25))
function loopArray(i, res = []) {
    if(i < 0)
        return res
    else 
        return loopArray(i - 1, [i, ...res])
}

console.log(loopArrayReverse(25))
function loopArrayReverse(i, res = []) {
    if(i < 0)
        return res
    else
        return loopArrayReverse(i - 1, [...res, i])
}

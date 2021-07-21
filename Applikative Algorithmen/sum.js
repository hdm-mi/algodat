function sum(number, res = 0) {
    if(number < 0)
        return res
    else
        return sum(number - 1, res + number)
}

console.log(sum(50))
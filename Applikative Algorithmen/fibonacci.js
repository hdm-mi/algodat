console.log(fibonacci(100))

function fibonacci(max, i = 1, o = 0, res = []) {
    if(i > max)
        return res
    else
        return fibonacci(max, i + o, i, [...res, i])
}

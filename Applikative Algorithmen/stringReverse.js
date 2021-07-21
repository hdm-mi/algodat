function stringReverse(string, i = 0, res = "") {
    if(i >= string.length)
        return res
    else
        return stringReverse(string, i + 1, string[i] + res)
}

console.log(stringReverse("Test123"))
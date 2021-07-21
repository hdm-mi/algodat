function removeWhitespaces(string, i = 0, res = "") {
    if(i >= string.length)
        return res
    else
        if(isWhiteSpace(string[i]))
            return removeWhitespaces(string, i + 1, res)
        else
            return removeWhitespaces(string, i + 1, res + string[i])
}

function isWhiteSpace(char) {
    if(char == " ")
        return true
    else
        return false
}
console.log(removeWhitespaces(" Hallo Welt,   wie geht  es? "))
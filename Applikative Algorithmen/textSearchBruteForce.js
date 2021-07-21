function search(string, query, i = 0) {
    if(i >= string.length)
        return -1
    else
        if(subString(string, i, query.length) == query)
            return i + 1
        else 
            return search(string, query, i + 1)
}

function subString(string, position, length, i = 0, res = "") {
    if(i >= length || position + i >= string.length)
        return res
    else
        return subString(string, position, length, i + 1, res + string[position + i])
}

console.log(search("Hallo World", "los"))
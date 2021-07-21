function isPalindrom(string, i = 0) {
    if(i < string.length / 2)
        return true
    if(string[i] == string[string.length - 1 - i])
        return isPalindrom(string, i + 1)
    else
        return false
}
console.log(isPalindrom("hannah"))
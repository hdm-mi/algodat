/**
 * Returns the start position of a string in text. If the search is not in the text it will return -1
 * @param {string} text text you would like to search
 * @param {string} search search phrase
 * @returns the position of the searched text in the text
 */
function f(text, search, pos = 0) {
    if(pos > text.length - search.length)
        return -1
    if(getTextFromLength(text, search.length, pos) == search)
        return pos + 1
    else
        return f(text, search, pos + 1)
}
console.log(f("Hallo, wie geht’s?", "geh"))

/**
 * isExact("who", "who") -> true
 * isExact("who", "whos") -> false
 * isExact("wh", "who") -> false
 * 
 * @param {string} text
 * @param {string} search
 * @returns true if the two strings are the same
 */
function isExact(text, search, pos = 0) {
    if(pos > text.length)
        return true

    if(text[pos] == search[pos])
        return isExact(text, search, pos + 1)
    else
        return false
}

/**
 * Get's the substring from a start position witht the given length
 * @param {string} text string
 * @param {int} length lenght of substring
 * @param {int} start startposition of substring
 * @returns returns substring
 */
function getTextFromLength(text, length, start, i = start, res = "") {
    if(i >= length + start || i >= text.length)
        return res
    return getTextFromLength(text, length, start, i + 1, res + text[i])
}
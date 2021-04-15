function evenNumbers(num, array = []) {
    if (num < 0)
        return array
    if(num % 2 == 0)
        return evenNumbers(num - 1, [...array, num])
    else
        return evenNumbers(num - 1, array)
}

console.log(evenNumbers(100))
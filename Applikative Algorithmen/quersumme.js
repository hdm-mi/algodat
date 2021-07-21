function quersumme(number, sum = 0) {
    if(number <= 0)
        return sum
    else
        return quersumme(Math.floor(number / 10), sum + number % 10)
}
console.log(quersumme(321))

function primeList(number, res = []) {
    if(number == 1)
        return res;
    
    if(isPrime(number))
        res.push(number)

    return primeList(--number, res)
    
}

function isPrime(number, teiler = number > 10 ? 10 : number - 1) {
    if(teiler == 1)
        return true;
    
    if(number % teiler == 0)
        return false
    else
        return isPrime(number, --teiler)    
}

console.log(primeList(100))
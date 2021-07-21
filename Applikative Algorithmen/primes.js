console.log(primes(50))

function primes(i, res = []) {
    if(i < 2)
        return res
    else
        if(isPrime(i))
            return primes(i - 1, [i, ...res])
        else
            return primes(i - 1, res)
}

function isPrime(number, i = number - 1, res = true) {
    if(i < 2)
        return res
    else
        if(number % i == 0)
            return isPrime(number, i - 1, false)
        else
            return isPrime(number, i - 1, res)
}

// oder 
function isPrimeShorter(number, i = number - 1) {
    if(i < 2)
        return true
    if(number % i == 0)
        return false
    else
        return isPrime(number, i - 1)
}


// oder 
function isPrimeMoreEfficient(number, i = number < 10 ? number - 1 : 10) {
    if(i < 2)
        return true
    if(number % i == 0)
        return false
    else
        return isPrime(number, i - 1)
}
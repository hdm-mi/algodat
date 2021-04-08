function laRusse(a, b, res = 0) { 
    console.log(a, b, res)
    if(a == 1) {
        return (res + b)
    }
    else
        if(a % 2 == 0)
            return laRusse(Math.floor(a/2), b*2, res)
        else
            return laRusse(Math.floor(a/2), b*2, res+b)
}

console.log(laRusse(45, 19))
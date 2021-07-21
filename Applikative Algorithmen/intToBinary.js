function intToBinary(number, res = "") {
    if(number < 1)
        if(res === "")
            return "0"
        else
            return res
    else
        return intToBinary(Math.floor(number / 2), number % 2 + res)
}
console.log(intToBinary(-12))
/*
function t(n) {
    console.log(n, intToBinary(n))
}

for(let i = 0; i < 100; i++) 
    t(i)
*/
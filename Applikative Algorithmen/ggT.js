function ggT(a, b) {
    if(b == 0)
        return a
    else
        return ggT(b, a % b)
}

console.log(ggT(63, 27))
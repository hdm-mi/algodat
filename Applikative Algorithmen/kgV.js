function kgV(a, b, i = 1) {
    if((a * i) % b == 0)
        return a * i
    else
        return kgV(a, b, i + 1)
}

console.log(kgV(796, 766))
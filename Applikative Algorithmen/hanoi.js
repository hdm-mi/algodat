function hanoi (n, q = "Quelle", z = "Ziel", h = "Hilfe") {
    if(n == 1)
        return q + ' -> ' + z + '\n'
    else
        return hanoi(n - 1, q, h, z) + hanoi(1, q, z, h) + hanoi(n - 1, h, z, q)
}

console.log(hanoi(3))


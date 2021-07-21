console.log(faculty(5))

function faculty(i, res = 1) {
    if(i < 1)
        return res
    else
        return faculty(i - 1, res * i)
}

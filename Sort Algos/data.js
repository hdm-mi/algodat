const array = []
const NUMBERS = 500
const MAX_VALUE = 10

for(let i = 0; i < NUMBERS; i++)
    array.push(Math.floor(Math.random() * MAX_VALUE))

console.log(array)
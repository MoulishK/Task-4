const sumArray = arr => arr.reduce((sum, num) => sum + num, 0)
const numbers = [10, 20, 30, 40, 50]
const sum = sumArray(numbers)
console.log(`sum of array is:${(sum)}`)


const getOddNumbers = arr => {
  let oddNumbers = []
  for (let num of arr) {
    if (num % 2 !== 0) {
      oddNumbers.push(num)
    }
  }
  return oddNumbers;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(`Odd numbers in the array: ${getOddNumbers(numbers)}`)

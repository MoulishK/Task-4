const findPalindromes = arr => arr.filter(item => {
    let str = item.toString()
    return str === str.split('').reverse().join('')
  })
  let arr =["madam","level","malayalam","racecar","num","let","const"]
  console.log(`palindrome are: ${findPalindromes(arr)}`)
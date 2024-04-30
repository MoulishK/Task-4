const isPrime = num => {
    for (let ind = 2, s = Math.sqrt(num); ind <= s; ind++)
      if (num % ind === 0) return false;
    return num > 1
  }
  
  let getPrimes = arr => arr.filter(isPrime)
  
  let array = [2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(`prime numbers are:${getPrimes(array)}`)
  
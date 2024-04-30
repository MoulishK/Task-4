
let convertToTitleCase = (arr) => {
    let titleCaseArray = [];
    for (let ind = 0; ind < arr.length; ind++) {
        const str = arr[ind]
        const titleCaseStr = str.replace(/\b\w/g, (char) => char.toUpperCase())
        titleCaseArray.push(titleCaseStr)
    }
    return titleCaseArray
}

// Example usage
let inputArray = ["hai","hello","how","are","you"]
let titleCaseArray = convertToTitleCase(inputArray)
console.log(titleCaseArray)

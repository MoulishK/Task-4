const medianOfSortedArrays=function (num1, num2) {
    const mergedArray = num1
        .concat(num2)
        .sort((a, b) => a - b);
    const n = mergedArray.length;
    if (n % 2 === 0) {
        return (mergedArray[n / 2 - 1] + mergedArray[n / 2]) / 2;
    } else {
        return mergedArray[Math.floor(n / 2)];
    }
}
const num1 = [1, 2, 3];
const num2 = [4];
console.log(
    "Median of 2 sorted array is :", medianOfSortedArrays(num1, num2)); 

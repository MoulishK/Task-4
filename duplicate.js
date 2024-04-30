const removeDuplicates=function (arr) {
    let uniqueItems = [];

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (uniqueItems.indexOf(item) === -1) {
            uniqueItems.push(item);
        }
    }

    return uniqueItems;
}

let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
let result = removeDuplicates(arr);
console.log(result);

const odd =function(arr){
    let oddNumber =[]
    for (let ind =1;ind<arr.length;ind++){
        if(arr[ind]%2 !==0){
            oddNumber.push(arr[ind])
        }
    }
    return oddNumber
}
let arr = [1,2,3,4,5,6,7,8,9,10]
console.log(odd(arr))
const sum=function(arr){
    let sum =0
    for(let ind=0;ind<arr.length;ind++){
        sum+=arr[ind]
    }
    return sum

}
let arr = [1,2,3,4,5,6,7,8,9,10]
console.log(sum(arr))
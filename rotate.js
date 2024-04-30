const rotateArray = function () {
    

    
    
    return function (k) {
        let n = nums.length;
        k = k % n; // Ensure k is within array bounds
        let rotated = [];
        for (let ind = 0; ind < n; ind++) {
            rotated[(ind + k) % n] = nums[ind]
        }
        return rotated;
    };
}();

let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 2
console.log(rotateArray(k))

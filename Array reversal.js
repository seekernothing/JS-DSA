
let arr =[2,4,6,8,10,1,2,14]

// Brute force approach  ( tc = o(n) and sc = o(n))

// function arrReversal(arr){
//     let reversedArr = []
//     for(let i=arr.length-1;i>=0;i--){
//         reversedArr.push(arr[i])
//     }
//     return reversedArr
// }



// Two pointers approach ( tc = o(n) & sc =o(1))
function arrReversal(arr){

    let left = 0
    let right = arr.length-1

    while(left<right){

        let temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp

        left ++
        right --
    }
    return arr
}

console.log(arrReversal(arr));
/*
Sum of Array Except Self
Given an array of n integers where n > 1, return an array output such that output[i] is equal to the sum of all the elements of nums except nums[i]. All integers in array are greater than 0.

Input Format
First line consists of an integer n which is the number of elements in array

Next n lines correspond to n elements of array

Output Format
Return the resultant array as asked in question.

Example 1
Input

4
4 3 2 10
Output

15 16 17 9
Explanation

After updation,

a[0]=15 i.e., 3+2+10

a[1]=16 i.e., 4+2+10

a[2]=17 i.e., 4+3+10

a[3]=9 i.e., 4+3+2

Constraints
1 <= n <= 5000

1 <= a[i] <= 1000000

It is guaranteed that the sum of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Topics
Arrays
*/



let arr = [4,3,2,10]

function sumOfExpectSelf(arr){
    let res = []
   
   for(let i=0;i<arr.length;i++){
    let sum =0
    for(let j=0;j<arr.length;j++){
        if(i!=j){
            sum+=arr[j]
        }
    }
    res.push(sum)
   }

   return res
    
}

console.log(sumOfExpectSelf(arr));

// tc = o(n*n)
// sc = o(n)

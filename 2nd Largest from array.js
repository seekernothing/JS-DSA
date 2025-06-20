/*
2nd Largest from array
Given an unsorted array of size N with distinct elements. Find the 2nd largest element from the array without sorting the array.

Input Format
The first line contains a single integer N.

The second line consists of N integers of the array.

Output Format
Print the second largest number in the new line.

Example 1
Input

6
3 2 1 5 6 4
Output

5
Explanation

5 is the second largest element of the array.

Example 2
Input

9
10 1 7 2 5 6 8 9 3
Output

9
Explanation

9 is the Second largest element in the array

Constraints:
2 <= N <= 10^5

-10^5 <= N <= 10^5

Topics
Arrays



*/



let arr = [2,4,6,8,23,45,67,232]

/*
Intution:

first find largest num 

even before assigning arr[i] to largest assign  second Largest to largest

*/

function secondLargest(arr){
    let largest = -Infinity
    let secondLargest = -Infinity

    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            secondLargest= largest
            largest = arr[i]
        }else if (
            arr[i]>secondLargest && arr[i] != secondLargest
        ){
            secondLargest = arr[i]
        }
    }

    return secondLargest
}

console.log(secondLargest(arr));

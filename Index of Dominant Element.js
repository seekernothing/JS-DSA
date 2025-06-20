//You are given an integer array nums of size n where the largest integer is unique.
// Your task is to determine whether the largest element in the array is at least twice as much as every other number in the array.
// If it is, print the index of the largest element, or print -1 otherwise.

// first find the largest num in the array

// compare the the largest num with every other num of the array
// if it is twice  of remaining elements then return its index. it it is not return -1

const arr = [2,4,8,3];

function indexOfDom(arr) {
  let largest = -Infinity;
  let largestIndex = -1;

  // fin d the largest num and its index
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
      largestIndex = i;
    }
  }

  // check for other conditions

  for(let i=0;i<arr.length;i++){
    if(i!=largestIndex && largest<2*arr[i]){
      return -1
    }
  }

// else return largest index

return largestIndex

}

console.log(indexOfDom(arr));

/*
Angry Professor
A professor has set a rule: if fewer than k students arrive on time for the class, then the class will be canceled. Based on the arrival times of each student, determine if the class gets canceled.

Input Format:
Two space-separated integers: n (the number of students) and k (the minimum number of students who should arrive on time to avoid class cancellation).
An array of n integers representing the students' arrival times. A non-positive value (<=0) means the student arrived on time, and a positive value (>0) means the student was late.
Output Format:
If the class is canceled, print YES.
Otherwise, print NO.
Example:
Input:

5 3
0 0 0 0 -1
Output:

NO
Constraints:
1 <= n <= 1000
1 <= k <= n
-100 <= a[i] <= 100

*/


let arr = [0,1,1,1,-1]
let target = 3

function classCancelation(arr,target){
let count = 0
for(let i=0;i<arr.length;i++){
    if(arr[i]<=0){
        count++
    }


}

if(count<target){
    return "yes"
}else{
    return "no"
}
}

console.log(classCancelation(arr, target));

/*
tc = o(n)
sc = o(1)
*/
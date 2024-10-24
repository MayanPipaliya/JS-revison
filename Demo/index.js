let arr = [1,2,3,4];
let n = arr.length;
let even = 0;
let odd = 0;

for(let i = 0; i < n; i++) {
    if(arr[i]%2 == 0) {
        even += arr[i];
    }
    else {
        odd += arr[i];
    }
}
console.log("Sum of even numbers: " + even);
console.log("Sum of odd numbers: " + odd);

if(even>odd){
    console.log("Even numbers are greater");
}
else{
    console.log("Odd numbers are greater");
}



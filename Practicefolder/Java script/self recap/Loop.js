// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log("Loop finished!");  

// // This code snippet demonstrates a simple loop that iterates from 0 to 9 and logs each number to the console.

// // access element in array by using for loop
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//access elements by using .textContent
let arrs = [1, 2, 3, 4, 5];
let arrEl = document.getElementById("arr-el");

for (let i = 0; i < arrs.length; i++) {
    arrEl.textContent += arrs[i] + "";
}
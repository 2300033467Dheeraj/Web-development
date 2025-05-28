let count = 3;
function increment() {
    count+=3;
}
function decrement() {
    count--;
}

increment(); // Increment count by 3
increment(); // Increment count by another 3
increment(); // Increment count by 3 again
decrement(); // Decrement count by 1
decrement(); // Decrement count by another 1
console.log(count); // Initial count value
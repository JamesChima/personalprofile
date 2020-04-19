// Write a function that takes one parameter and checks if numbers from 1 to the given parameter are divisible by 2, 3, 5.
// Numbers divisible by 2 are replaced by "yu"
// Numbers divisible by 3 are replaced by "gi"
// Numbers divisible by 5 are replaced by "oh"
// Return an array containing all numbers from 1 to the passed argument(inclusive) where all divisible numbers have been replaced as specified above.
// Call the function and pass 100 as an argument.
// Call the function and pass it a random number of your choice

function divisible (number) {
    let arr = [];
    for (let i = 1; i <= number; i++){
        if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
            arr.push('yu-gi-oh');
        }
        else if (i % 2 === 0 && i % 3 === 0 ){
            arr.push('yu-gi');
        }
        else if (i % 3 === 0 && i % 5 === 0 ){
            arr.push('gi-oh');
        }
        else if (i % 2 === 0 && i % 5 === 0 ){
            arr.push('yu-oh');
        }
        else if (i % 2 === 0){
            arr.push('yu');
        }
        else if (i % 3 === 0){
            arr.push('gi');
        }
        else if (i % 5 === 0){
            arr.push('oh');
        }
        else {
            arr.push(i);
        }
    }
    console.log(arr);
}

divisible(100);

divisible(30);

// task 01
// Find the lowest number in the array below.

const numbers = [167, 190, 120, 165, 137];

function heightNumber(numbers){
    let heightNum = numbers[0];
    for (let number of numbers) {
        if (number > heightNum){
            heightNum = number;
        }
    }
    return heightNum;
}
// call 
const heightNum = heightNumber(numbers);
console.log("this height number",heightNum);
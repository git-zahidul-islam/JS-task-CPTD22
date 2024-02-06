// Your task is to calculate the total budget required to buy electronics ---
const laptop = "seven";
const tablet = 15000;
const mobile = 20000;

// function
function calculateElectronicsBudget(num1,num2,num3){
    const total = num1 + num2 + num3;
    return total;
}
// call 
const totalBudget = calculateElectronicsBudget(laptop, tablet, mobile);
console.log("The total amount:",totalBudget);


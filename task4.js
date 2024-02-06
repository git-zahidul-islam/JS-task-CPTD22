// returns the average price of phone.
const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];
// function 
function findAveragePhonePrice(array){
    let allPrice = 0;
    for(let item of array){
        allPrice += item.price
    }
    const avgNumber = allPrice / array.length
    const avg = Math.round(avgNumber);
    return avg;

}
// call 
const averagePriceOfPhone = findAveragePhonePrice(phones);
console.log("Average Price:",averagePriceOfPhone);
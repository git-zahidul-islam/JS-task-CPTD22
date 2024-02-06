// Find the friend with the smallest name.
const manName = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

let smallName = manName[0];
for (let i = 0; i < manName.length; i++) {
    if (manName[i].length < smallName.length){
        smallName = manName[i]
    }
}
console.log(smallName);

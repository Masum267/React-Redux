function discountCalculateCurry(discount){
    return function(price){
        return discount*price;
    }
}


let tenPercentDis=discountCalculateCurry(.2);
let fifteenPercentDis = discountCalculateCurry(0.25);

console.log(typeof tenPercentDis)

console.log(tenPercentDis(1200))
console.log(fifteenPercentDis(1500));
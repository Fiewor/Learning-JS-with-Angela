function getMilk(money, priceOfMilk) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log ("Buy " + noOfBottles(money, priceOfMilk) + " bottles of milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    console.log ("Your change is $" + calcChange(money, priceOfMilk));
}

function noOfBottles(money, priceOfMilk) {
    let bottles = Math.floor(money / priceOfMilk);
    return bottles;
}

function calcChange(money, priceOfMilk) {
    let change = money % priceOfMilk;
    return change;
}

getMilk(10, 1.5);


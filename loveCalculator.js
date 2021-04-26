/*let user = prompt("Enter your name:");
let lover = prompt("Enter your lover's name:");
*/
let n = Math.random(); //generate a random number 0 - 0.9999999999999999
n = n * 100; //multiply it by 100 top get a number between 0 - 99.9999999999999999
n = Math.floor(n) + 1; //add 1 to include 100
// or simply combine them all in one 
// let n = Math.floor(Math.random() * 100) + 1;
// console.log("The compactibility between" + user + " and " + lover + " is " + n + "%");

if (n > 70) {
    alert("The compactibility between" + user + " and " + lover + " is " + n + "%" +"You were made for each other like butter was made for bread");
}

if (n < 30 && n <= 70) {
    alert("The compactibility between" + user + " and " + lover + " is " + n + "%");
}

else {
    alert("The compactibility between" + user + " and " + lover + " is " + n + "%" + "You go together like a square box goes in a round hole");
}
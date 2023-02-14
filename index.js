// Iteration 1: Names and Input

const hacker1 = "João";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Luís";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

const lengthDriver = hacker1.length;
const lengthNavigator = hacker2.length;
if (lengthDriver > lengthNavigator) {
    console.log(`The driver has the longest name, it has ${lengthDriver} characters.`);
    } else if (lengthDriver < lengthNavigator) {
    console.log(`It seems that the navigator has the longest name, it has ${lengthNavigator} characters.`);
    } else {
    console.log(`Wow, you both have equally long names, ${lengthDriver} characters!`);
    }

// Iteration 3: Loops

let driverName = "";
for (let i = 0; i < hacker1.length; i++) {
driverName += hacker1[i].toUpperCase() + " ";
}
console.log(driverName.trim());
let navigatorName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
navigatorName += hacker2[i];
}
console.log(navigatorName);
if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
    } else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
    } else {
    console.log("What?! You both have the same name?");
    }


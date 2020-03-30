// Iteration 1: Names and Input
var hacker1 = "driver";

var driverIs = `The driver's name is ${hacker1}`;

console.log(driverIs);

var hacker2 = "navigator";

var navigatorIs = `The navigator's name is ${hacker2}`;

console.log(navigatorIs);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(`you both have equally long names, ${hacker1.length}`);
}

// Iteration 3: Loops

let capitalName = "";

for (let i = 0; i < hacker1.length; i++) {
  capitalName += hacker1[i].toUpperCase() + " ";
}
console.log(capitalName);

let navigatorCapitalName = "";

for (let i = hacker2.length; i >= 0; hacker2.charAt(i--)) {
  navigatorCapitalName += hacker2.charAt(i);
}
console.log(navigatorCapitalName);

if (hacker1.charAt(0) < hacker2.charAt(0)) {
  console.log("The driver's name goes first");
} else if (hacker2.charAt(0) < hacker1.charAt(0)) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both have the same name?");
}

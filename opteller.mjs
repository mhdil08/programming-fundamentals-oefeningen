import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});




// Voeg hier je eigen code in
let resultaat = 0
let getal1 = parseFloat (await userInput.question("Voer het eerste getal in: "));
let getal2 = parseFloat (await userInput.question("Voer het tweede getal in: "));
let som = getal1 + getal2;

resultaat = getal1 + getal2
console.log("de som: " + resultaat)

resultaat = getal1 - getal2
console.log("de verschil: " + resultaat)

resultaat = getal1 * getal2
console.log("de product: " + resultaat)

resultaat = getal1 / getal2
console.log("de deling: " + resultaat)

process.exit();

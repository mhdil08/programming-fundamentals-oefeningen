import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

// Schrijf een loop die alle elementen van een array met de naam ingredients afdrukt.

let ingredients = ["appel", "peer", "druiven"];

for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

process.exit();

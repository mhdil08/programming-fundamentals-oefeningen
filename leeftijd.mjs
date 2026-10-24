import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let toekomstJaar = 2031
let geboorteJaar = await userInput.question(" Wat is jou geboortejaar ? ")
let resultaat = toekomstJaar - geboorteJaar;

console.log ("In 2031 zal ik " + resultaat + " jaar oud zijn. ")

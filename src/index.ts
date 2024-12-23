import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputs: Array<string> = [];

rl.on('line', (input) => {
    inputs.push(input);
});

rl.on('close', () => {
    console.log(`Received: ${inputs}`);
});
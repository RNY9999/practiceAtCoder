import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });
const lines: string[] = [];

rl.on('line', (line: string): void => {
    lines.push(line);
})

rl.on('close', (): void => {
    solution();
})

const solution = (): void => {
    const numbers: number[] = lines[1].split(' ').map(Number);

    let addOddNumber: number = 0;

    numbers.forEach((number: number, index: number): void => {
        if (index % 2 === 0) {
            addOddNumber += number;
        }
    })

    console.log(addOddNumber);
}
import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

const rl = readline.createInterface({input, output});

const lines: string[] = [];

rl.on('line', (line: string): void => {
    lines.push(line);
})

rl.on('close', (): void => {
    solution();
})

const solution = (): void => {
    // a, b, cを受け取る
    const [a, b, c]: number[] = lines[0].split(' ').map(Number);
    /**
     * a, [b, c] pattern1
     * b, [a, c] pattern2
     * c, [a, b] pattern3
     * a, b, c   pattern4
     * の3グループを作る
     */ 
    const pattern1: boolean = a === b + c ? true : false; 
    const pattern2: boolean = b === a + c ? true : false; 
    const pattern3: boolean = c === a + b ? true : false; 
    const pattern4: boolean = a === b && b === c ? true : false; 
    
    if (pattern1 || pattern2 || pattern3 || pattern4) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}
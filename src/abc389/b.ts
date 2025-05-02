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
    // 受け取った文字列を数字として取得
    const inputInt: number = Number(lines[0]);

    // N! = inputIntとなるNを求める
    let N: number = 1;
    let factorialN: number = 1;
    while (factorialN < inputInt) {
      N++;
      factorialN *= N;
    }

    console.log(N);
}
import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

const rl = readline.createInterface({input, output});

const lines: string[] = [];

rl.on('line', (line) => {
    lines.push(line);
});

rl.on('close', () => {
    const startTime = performance.now();
    solution();
    const endTime = performance.now();

    console.log(`time: ${endTime - startTime} ms`);
    const used = process.memoryUsage().heapUsed / (1024 * 1024);
    console.log(`memory: ${used} MB`);
});

const solution = (): void => {
    //整数の個数をn
    //nこの整数をnumbersに格納
    const n: number = parseInt(lines[0], 10);
    const numbers: number[] = lines[1].split(' ').map(Number);

    let numOfDivision: number = 0;
    let finishFlag: boolean = true;

    while (finishFlag) {
        // 整数回(n回)配列を回し、全ての整数を2で割る、割り切れる場合はnumbersの値を更新、割り切れない場合は、finishFlagをfalseにする
        for (let i = 0; i < n; i++) {
            const result: number = numbers[i] % 2;
            if (result === 0) {
                numbers[i] /= 2; 
            } else {
                finishFlag = false;
            }
        }
        if (finishFlag) {
            numOfDivision ++;
        }
    }

    console.log(numOfDivision);
};
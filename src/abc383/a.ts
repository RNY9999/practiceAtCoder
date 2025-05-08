import * as readline from 'node:readline/promises';
import { stdin as input, stdin as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const lines: string[] = [];

rl.on('line', (line: string): void => {
    lines.push(line);
})

rl.on('close', (): void => {
    solution();
})

const solution = (): void => {

    // 水の給水回数N
    const N: number = Number(lines[0]);

    const waterSupply: number[][] = [];

    for (let i = 1; i <= N; i++) {
        const [time, amount] = lines[i].split(' ').map(Number);
        waterSupply.push([time, amount]);
    }

    let totalWater: number = waterSupply[0][1];

    for (let i = 1; i < N; i++) {
        const timeDiff: number = waterSupply[i][0] - waterSupply[i -1][0];
        if (totalWater - timeDiff <= 0) {
            totalWater = 0;
        } else {
            totalWater -= timeDiff;
        }
        totalWater += waterSupply[i][1];
    }

    console.log(totalWater);
}
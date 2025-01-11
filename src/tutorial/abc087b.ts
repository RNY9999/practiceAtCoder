import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

const rl = readline.createInterface({input, output});

const lines: string[] = [];

rl.on('line', (line: string) => {
    lines.push(line);
});

rl.on('close', () => {
    const startTime: number = performance.now();
    solution();
    const endTime: number = performance.now();

    console.log(`time: ${endTime - startTime} ms`);
    const used = process.memoryUsage().heapUsed / (1024 * 1024);
    console.log(`memory: ${used} MB`);
});

const solution = (): void => {
    // 500円玉の枚数a, 100円玉の枚数b, 50円玉の枚数c, 合計金額x
    const [a, b, c, x]: number[] = lines.map(Number);

    // 500円, 100円, 50円で払える金額
    const paid500: number[] = [];
    const paid100: number[] = [];
    const paid50 : number[] = [];

    for (let i = 0; i <= a; i++) {
        paid500.push(500 * i);
    }
    for (let i = 0; i <= b; i++) {
        paid100.push(100 * i);
    }
    for (let i = 0; i <= c; i++) {
        paid50.push(50 * i);
    }

    let muchX: number = 0;
    paid500.forEach((i) => {
        paid100.forEach((j) => {
            paid50.forEach((k) => {
                if (i + j + k === x) {
                    muchX += 1;
                }
            });
        });
    });

    console.log(muchX);
};
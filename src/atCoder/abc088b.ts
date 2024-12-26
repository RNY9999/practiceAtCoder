import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

const rl = readline.createInterface({input, output});

const lines: string[] = [];

rl.on('line', (line: string): void => {
    lines.push(line);
});

rl.on('close', (): void => {
    const startTime = performance.now();
    const endTime = performance.now();
    solution();
    console.log(`time: ${endTime - startTime} ms`);
    const used = process.memoryUsage().heapUsed / (1024 * 1024);
    console.log(`memory: ${used} MB`);
});

const solution = (): void => {
    // n, a1 ~ an を受け取る
    const n: number = parseInt(lines[0], 10);
    const cards: number[] = lines[1].split(' ').map(Number);
    // alice, bobの得点
    let aliceScore: number = 0;
    let bobScore: number = 0;

    // cardのソート => 数字が大きい順
    const sortedCards: number[] = cards.sort((a: number, b: number) => b - a);
    
    // aliceとbobの得点を計算
    sortedCards.forEach((card: number, index: number) => {
        if (index % 2 === 0) {
            aliceScore += card;
        } else {
            bobScore += card;
        }
    })

    // aliceとbobの得点差を表示
    console.log(Math.abs(aliceScore - bobScore));
};
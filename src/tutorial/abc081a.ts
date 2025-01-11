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
    console.log(`size : ${used} MB`);
});

const solution = (): void => {
    // 入力値を1文字ずつ取り出し、number型に変換し、配列に挿入
    const numBox: number[] = [...lines[0]].map(Number);
    
    // 値が1となっているマスの数
    const numOfOne: number = numBox.filter(n => n === 1).length;
    console.log(numOfOne);
};
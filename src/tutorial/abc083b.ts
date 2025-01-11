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
    console.log(`memory: ${used} MB`)
});

const solution = (): void => {
    // n, a, bを取得
    const [n, a, b]: number[] = lines[0].split(' ').map(Number);

    // 解答として表示する値
    let result: number = 0;
    // i = 1~nまでfor分を回した際に、iの各桁の和が a <= sumI <= bとなるiの個数を求める
    for (let i: number = 1; i <= n; i++) {
        // iをstring型にして、splitで分割、分割したものをnumber型で配列に挿入、配列の中の数字を全て足し合わせる
        const sumI: number = String(i).split('').map(Number).reduce((sum, elm): number => {
            return sum + elm;
        }, 0)
        if (a <= sumI && sumI <= b) {
            result += i;
        }
    }

    console.log(result);
};
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
    // 文字列inputStrを取得
    const inputStr: string = lines[0];
    // inputStrの先頭1文字を取得
    const firstChar: string = inputStr[0];

    // firstCharと"UPC"を結合して出力
    console.log(firstChar + "UPC");
}
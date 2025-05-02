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
    // 文字列Sを取得
    const inputStr: string = lines[0];

    // inputStrのフォーマットは/^[1-9]x[1-9]$/
    // 1文字目を取得
    const firstChar: string = inputStr[0];
    // 3文字目を取得
    const thirdChar: string = inputStr[2];
    // 1文字目と3文字目を数値型に変換して掛け算
    const result: number = Number(firstChar) * Number(thirdChar);
    // resultを出力
    console.log(result);
}
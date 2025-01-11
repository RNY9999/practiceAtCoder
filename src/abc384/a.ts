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
    // lengthStr: 文字列の長さ
    // notChangeChar: 交換しない文字
    // changeChar: 交換にしようする文字
    // 上記をstring型で取得
    const [lengthStr, notChangeChar, changeChar]: string[] = lines[0].split(' ');

    // lengthをnumber型に変換
    const textLength: number = Number(lengthStr);

    // inputText: 文字列を取得
    const inputText: string = lines[1];

    // for文を回して、文字列を一文字ずつ検査して、交換しない文字以外の時に、交換する文字で置き換える
    let resultText: string = '';

    for (let i: number = 0; i < textLength; i++) {
        if (inputText[i] === notChangeChar) {
            resultText += notChangeChar;
        } else {
            resultText += changeChar;
        }
    }

    console.log(resultText);

    }
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
    // 文字列inputStrを受け取る
    const inputStr: number[] = lines[0].split('').map(Number);

    // ボタンを押した回数pushButtons
    let pushButtons: number = 0;

    for (let i: number = 0; i < inputStr.length; i++) {
        // inputStr[i]が0の場合はinputStr[i + 1]も見る
        if (inputStr[i] === 0) {
            if (inputStr[i + 1] === 0) {
                // 0の場合iを1増やす
                i++;
            }
        }
        pushButtons++;
    }
    console.log(pushButtons);
}
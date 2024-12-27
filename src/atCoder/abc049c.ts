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
    // 文字列sの受け取り
    let inputStr: string = lines[0];
    /**
     * 比較対象の文字列
     * dream dreamer erase eraser
     * 5, 6, 7文字であることに着目
     * inputStr.length === 0 になるか マッチしない文字を見つけるまでwhile文で検索する
     */
    let notMuch: boolean = false;
    let inputStrLength: number = inputStr.length;

    while (!(notMuch || inputStrLength === 0)) {
        // 5, 6, 7文字で後ろから切り取る
        const fiveCharactersFromBack: string = inputStr.substring(inputStr.length - 5);
        const sixCharactersFromBack: string = inputStr.substring(inputStr.length - 6);
        const sevenCharactersFromBack: string = inputStr.substring(inputStr.length - 7);

        if (fiveCharactersFromBack === 'dream' || fiveCharactersFromBack === 'erase') {
            inputStr = inputStr.slice(0, inputStr.length - 5);
        } else if (sixCharactersFromBack === 'eraser') {
            inputStr = inputStr.slice(0, inputStr.length - 6);
        } else if (sevenCharactersFromBack === 'dreamer') {
            inputStr = inputStr.slice(0, inputStr.length - 7);
        } else {
            notMuch = true;
        }

        inputStrLength = inputStr.length;
    }

    if (notMuch) {
        console.log('NO');
    }
    if (inputStrLength === 0) {
        console.log('YES');
    }
}
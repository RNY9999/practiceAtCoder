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

    // inputStrは英小文字からなる長さ1~25の文字列
    // 文字列に含まれない英小文字を１文字出力

    // 文字列を重複を削除して昇順に並び替える
    const uniqueSortedStr: string = [...new Set(inputStr)].sort().join('');
    const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';

    // uniqueSortedStrの長さが26文字になるように末尾に*を追加
    const uniqueSortedStrAddPad: string = uniqueSortedStr.padEnd(26, '*');

    // 文字列に含まれない英小文字を取得
    for (let i = 0; i < uniqueSortedStrAddPad.length; i++) {
        if (uniqueSortedStrAddPad[i] !== alphabet[i]) {
          console.log(alphabet[i]);
          return;
        }
    }
}
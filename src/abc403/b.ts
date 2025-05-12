import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });
const lines: string[] = [];

rl.on('line', (line: string): void => {
    lines.push(line);
})

rl.on('close', (): void => {
    solution();
})

const solution = (): void => {
    // ワイルドカード?を含む文字列T
    const T: string = lines[0];
    // ワイルドカード?を含まない文字列U
    const U: string = lines[1];
    
    let matchFlg = true;
    // UがTの部分文字列であるかを判定
    const gapOfStringLength: number = T.length - U.length;
    for (let i = 0; i <= gapOfStringLength; i++) {
        matchFlg = true;
        for (let j = 0; j < U.length; j++) {
            if (U[j] === T[i + j] || T[i + j] === '?') {
                // 何もしない
                if (j === U.length - 1 && matchFlg) {
                console.log('Yes');
                return;
                }
            } else {
                matchFlg = false;
            }
        }
    }
    
    if (!matchFlg) {
      console.log('No');
    }
}
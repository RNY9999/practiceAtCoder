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
    // card四枚a, b, c, dを受け取る
    const cards: number[] = lines[0].split(' ').map(Number);

    // cardsを重複を削除する
    const uniqueCards: number[] = Array.from(new Set(cards));

    // cardsのlengthが2の場合はYes, それ以外はNo
    if (uniqueCards.length === 2) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}
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
    // height, width, manhattanDistanceを取得
    const [height, width, manhattanDistance]: number[] = lines[0].split(' ').map(Number);

    // officeを2次元配列で初期化
    const office: string[][] = [];
    for (let i = 1; i <= height; i++) {
        office.push(lines[i].split(''));
        for (let j = 0; j < manhattanDistance; j++) {
            office[i - 1].unshift('#');
            office[i - 1].push('#');
        }
    }

    for (let i = 0; i < manhattanDistance; i++) {
        office.unshift(Array(width + manhattanDistance * 2).fill('#'));
        office.push(Array(width + manhattanDistance * 2).fill('#'));
    }

    console.log(office);


    
    for (let i = manhattanDistance; i < height + manhattanDistance; i++) {

    }
}
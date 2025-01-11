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
    // ビルの数numOfBuildings, ビルの高さheightsOfBuildingsを定義
    const numOfBuildings: number = Number(lines[0]);
    const heightsOfBuildings: number[] = lines[1].split(' ').map(Number);

    // 等間隔に並んだ高さが等しいビルの数resultを定義
    const result: number = 1;

    // 当館確認並んだ高さが等しいビルの数を求める
    for (let i: number = 0; i < numOfBuildings; i++) {
        for (let j: number = 1; j < numOfBuildings - (i + 1); j++) {
            if (i + j >= numOfBuildings) {
                break;
            }
            
        }
    }
}
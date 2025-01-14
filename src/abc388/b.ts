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
    // 蛇の数numOfSnakes, 追加する蛇の長さの上限値maxLength
    const [numOfSnakes, maxLength]: number[] = lines[0].split(' ').map(Number);

    // 蛇のステータスを取得
    // [snakeWidth, snakeLength]の形で取得
    const snakeStatus: number[][] = [];
    for (let i = 1; i <= numOfSnakes; i++) {
        snakeStatus.push(lines[i].split(' ').map(Number));
    }

    // 1からmaxLengthまで1刻みで長さを増やした際、一番重い蛇の主さを出力
    for (let i = 1; i <= maxLength; i++) {
        let maxWeight: number = 0;
        for (let j = 0; j < numOfSnakes; j++) {
            const thisSnakeWeight: number = (snakeStatus[j][0]) * (snakeStatus[j][1] + i);
            if (thisSnakeWeight > maxWeight) {
                maxWeight = thisSnakeWeight;
            }
        }
        console.log(maxWeight);
    }
}
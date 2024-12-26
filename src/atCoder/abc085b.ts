import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

const rl = readline.createInterface({input, output});

const lines: string[] = [];

rl.on('line', (line: string) => {
    lines.push(line);
})

rl.on('close', () => {
    solution();
})

const solution = (): void => {
    // 鏡餅の枚数と、鏡餅の直径の配列を用意
    const numOfRiceCake: number = parseInt(lines[0], 10);
    const diameterOfRiceCakes: number[] = lines.slice(1).map(Number);

    // 半径のダブりを削除
    const uniqueDiameterOfRiceCakes: number[] = Array.from(new Set(diameterOfRiceCakes));

    // ダブりなしの餅の数
    console.log(uniqueDiameterOfRiceCakes.length);
}
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
    // 餅の個数numOfMochiを取得
    const numOfMochi: number = Number(lines[0]);
    // 餅の直径を取得
    const mochiDiameters: number[] = lines[1].split(' ').map(Number);
    
    // 作成できる鏡餅の数

    let numOfKagamiMochi: number = 0;

    for (let i= numOfMochi -1; i >= 0; i--) {
        const targetDiameter: number =  mochiDiameters[i] * 2
        
        const index = binarySearch(mochiDiameters.map(i => i * 2), targetDiameter);
        if (index !== -1) {
            numOfKagamiMochi += index;
        }
    }

    console.log(numOfKagamiMochi);
}

// 二分探索を行う関数
const binarySearch = (arr: number[], target: number): number => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] >= target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left < arr.length ? left : -1;
}
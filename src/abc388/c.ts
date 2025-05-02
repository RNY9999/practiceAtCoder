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
        const targetDiameter: number =  Math.floor(mochiDiameters[i] / 2)
        
        const index = binarySearch(mochiDiameters, targetDiameter);
        if (index !== -1) {
            numOfKagamiMochi += index;
        }
    }

    console.log(numOfKagamiMochi);
}

// 二分探索を行う関数
const binarySearch = (arr: number[], target: number): number => {
    let returnIndex: number = -1;
    let left: number = 0;
    let right: number = arr.length -1;
    let finishFlag: boolean = false;

    while (!finishFlag) {
        const mid: number = Math.floor((left + right) / 2);

        /**
         * arr = [1, 2, 3, 4, 5], target = 3の場合
         * mid = 2, arr[mid] = 3
         * right = mid - 1 = 1
         * left = 0
         * 
         * 次のループ
         * mid = 0, arr[mid] = 1
         * right = 1
         * left = mid + 1 = 1
         * 
         * arr = [1, 2, 3, 4, 5, 6], target = 5の場合
         * mid = 2, arr[mid] = 3
         * right = arr.length - 1 = 5
         * left = mid + 1 = 3
         * 
         * 次のループ
         * mid = 4, arr[mid] = 5
         * right = 5
         * left = mid + 1 = 5
         * 
         * arr = [1, 3, 4, 6, 8], target = 0の場合
         * mid = 2, arr[mid] = 4
         * right = mid - 1 = 1
         * left = 0
         * 
         * 次のループ
         * mid = 0, arr[mid] = 1
         * right = mid - 1 = -1
         * left = 0
         */
        if (arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }

        if (right === left) {
            finishFlag = true;
            returnIndex = right;
        }

        if (left > right) {
            finishFlag = true;
        }
    }
    return returnIndex;
}
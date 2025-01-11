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
    // 回数nと座標addressesを用意
    const n: number = parseInt(lines[0], 10);
    const timeAndAddresses: string[] = lines.slice(1);
    const checkpoint: [number, number] = [0, 0];
    let canPlanFlag: boolean = true; // true = 'YES', false = 'NO'
    let checkTime: number = 0;
    
    // i+1回目の移動でその座標に移動可能かを確認
    for (let i: number = 0; i < n; i++) {
        // time, x, yを求める
        const [time, x, y]: number[] = timeAndAddresses[i].split(' ').map(Number);
        // 使用できる時間を求める
        const haveTime: number = time - checkTime;
        // その座標までの移動にかかる最短の時間を求める
        const minTime: number = Math.abs(checkpoint[0] - x) + Math.abs(checkpoint[1] - y);
        // 持ち時間 - 最短の時間が偶数ならYES奇数ならNOとなるのでフラグをtrue | falseで切り替える
        const wastedTime: number = haveTime - minTime;

        if (wastedTime % 2 === 1 || wastedTime < 0) {
            canPlanFlag = false;
            break;
        }

        // 次のループ前にcheckpointとcheckTimeを設定する
        checkpoint[0] = x;
        checkpoint[1] = y;
        checkTime = time;
    }

    if (canPlanFlag) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}

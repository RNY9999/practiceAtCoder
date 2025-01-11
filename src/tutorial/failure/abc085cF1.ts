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
    // お札の枚数n, 合計金額y
    const [numOfMoney, money]: number[] = lines[0].split(' ').map(Number);
    // お金の組合せの初期値
    type MoneySet = {
        10000: number,
        5000: number,
        1000: number
    };

    // それぞれのkeyに対する値はお札の枚数を表す
    const countOfMoney: MoneySet = {
        10000: -1,
        5000: -1,
        1000: -1
    }
    /**
     * 1万円札をx札使用した時
     * 5000円札はn-x札まで使用可能であり、
     * 5000円札をy札(ただし y <= n-x)札使用した時
     * 1000円札はn - (x + y)札使用可能
     * となり全てのパターンの金額を出し、Y円になるものを見つける、
     * 候補を見つけたらbreakしてfor分を抜ける
     */
    check: for (let x: number = numOfMoney; x >= 0; x--) {
        for (let y: number = numOfMoney - x; y >= 0; y--) {
            for (let z: number = numOfMoney - (x + y); z >= 0; z--) {
                // 合計金額を求める
                const sumMoney: number = 10000 * x + 5000 * y + 1000 * z;
                // 合計金額が,yと等しいならcountOfMoneyにx, y, zをせっとして、for文を終了
                if (sumMoney === money) {
                    countOfMoney[10000] = x;
                    countOfMoney[5000] = y;
                    countOfMoney[1000] = z;
                    break check;
                }
            }
        }
    }

    // countOfMoneyの中身を表示
    console.log(`${countOfMoney[10000]} ${countOfMoney[5000]} ${countOfMoney[1000]}`);
}

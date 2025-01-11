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
    // height, width, initialX, initialY求める
    const [height, width, initialH, initialW]: number[] = lines[0].split(' ').map(Number);
    // nowX, nowYを用意
    let nowH: number = initialH - 1;
    let nowW: number = initialW - 1;

    // mapを作成
    const map: string[][] = [];
    // mapにマークを描画
    for (let i: number = 0; i < height; i++) {
        map.push(lines[i + 1].split(''));
    }

    // 実際の操作コマンド
    const commands: string[] | undefined = lines.pop()?.split('');

    // 家の数を初期化
    let countHome: number = 0;
    // コマンドの数分、マップを移動
    commands?.forEach((c: string): void => {
        switch (c) {
            case 'U':
                if (map[nowH - 1][nowW] === '@') {
                    countHome++;
                    map[nowH - 1][nowW] = '.';
                    nowH--;
                } else if (map[nowH - 1][nowW] === '.') {
                    nowH--;
                }
                break;
            case 'D':
                if (map[nowH + 1][nowW] === '@') {
                    countHome++;
                    map[nowH + 1][nowW] = '.';
                    nowH++;
                } else if (map[nowH + 1][nowW] === '.') {
                    nowH++;
                }
                break;
            case 'L':
                if (map[nowH][nowW - 1] === '@') {
                    countHome++;
                    map[nowH][nowW - 1] = '.';
                    nowW--;
                } else if (map[nowH][nowW - 1] === '.') {
                    nowW--;
                }
                break;
            case 'R':
                if (map[nowH][nowW + 1] === '@') {
                    countHome++;
                    map[nowH][nowW + 1] = '.';
                    nowW++;
                } else if (map[nowH][nowW + 1] === '.') {
                    nowW++;
                }
                break;
            default:
                break;
        }
    });

    console.log(`${nowH + 1} ${nowW + 1} ${countHome}`);
}

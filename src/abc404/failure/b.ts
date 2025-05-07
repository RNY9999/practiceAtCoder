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
    // 正方形の一片の長さN
    const N: number = Number(lines[0]);
    // 正方形S, Tを準備
    let S: string[][] = [];
    let T: string[][] = [];

    // 正方形Sと正方形Tを取得
    for (let i = 1; i <= N; i++) {
        S.push(lines[i].split(''));
        T.push(lines[i + N].split(''));
    }

    // SとTが一致しているかどうかのフラグ
    let isMatchSandT: boolean = false;
    // Sの操作数
    let operationCount: number = 0;

    // SとTが一致するまでwhileループ
    while (!isMatchSandT) {
        // SとTの不一致数
        let mismatchCount: number = 0;
        // 不一致数の確認
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                // SとTga不一致の場合不一致カウントを増やす
                if (S[i][j] !== T[i][j]) {
                    mismatchCount++;
                }
            }
        }
        // 不一致の場合の操作
        /**
         * 操作の詳細
         * 1. Sの好きな要素を一つ変更
         * 2. Sを90度回転
         */
        // 90度回転させた際の不一致数を計算
        let rotated90S: string[][] = [];
        for (let j = 0; j < N; j++) {
            rotated90S.push([]);
            for (let i = 0; i < N; i++) {
                rotated90S[j].push(S[N - i - 1][j]);
            }
        }
        // rotated90SとTの不一致数を計算
        let rotated90MismatchCount: number = 0;
        // 不一致数の確認
        for (let i = 0; i < N; i++) {
          for (let j = 0; j < N; j++) {
              // SとTga不一致の場合不一致カウントを増やす
              if (rotated90S[i][j] !== T[i][j]) {
                  rotated90MismatchCount++;
              }
          }
        }

        if (rotated90MismatchCount < mismatchCount - 1) {
            // Sを90度回転
            S = rotated90S;
            operationCount++;
        } else {
          for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                // SとTが不一致の場合不一致カウントを増やす
                if (rotated90S[j][N - i - 1] !== T[i][j] && S[i][j] !== T[i][j]) {
                    S[i][j] = T[i][j];
                    operationCount++;
                } else if (S[i][j] !== T[i][j]) {
                  S[i][j] = T[i][j];
                    operationCount++;
                }
            }
          }
        }
        // 一致する場合は終了
        if (mismatchCount === 0) {
          isMatchSandT = true;
        }
    }
    
    // operationCountを出力
    console.log(operationCount);
}
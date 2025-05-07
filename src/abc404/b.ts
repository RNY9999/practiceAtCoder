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

    // 0度回転させた際の操作数
    let operationCountOf0 = countMismatches(S, T, N);
    // 90度回転させた際の操作数
    let operationCountOf90 = countMismatches(rotatedS(S, N, 90), T, N) + 1;
    // 180度回転させた際の操作数
    let operationCountOf180 = countMismatches(rotatedS(S, N, 180), T, N) + 2;
    // 270度回転させた際の操作数
    let operationCountOf270 = countMismatches(rotatedS(S, N, 270), T, N) + 3;

    // 最小の操作数を出力
    console.log(Math.min(operationCountOf0, operationCountOf90, operationCountOf180, operationCountOf270))
  }

// SとTの不一致数をカウントする関数
const countMismatches = (S: string[][], T: string[][], N: number): number => {
    let mismatchCount: number = 0;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
          // SとTが不一致の場合不一致カウントを増やす
          if (S[i][j] !== T[i][j]) {
              mismatchCount++;
          }
      }
    }
    return mismatchCount;
}

// Sを[90, 180, 270]度回転させる関数
const rotatedS = (S: string[][], N: number, degree: number): string[][] => {
    let rotateS: string[][] = [];
    for (let j = 0; j < N; j++) {
      rotateS.push([]);
      for (let i = 0; i < N; i++) {
          rotateS[j].push(S[N - i - 1][j]);
      }
    }
    if (degree > 90) {
      return rotatedS(rotateS, N, degree - 90);
    } else {
      return rotateS;
    }
}
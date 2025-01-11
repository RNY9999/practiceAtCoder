import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

const rl = readline.createInterface({input, output});

const lines: string[] = [];

rl.on('line', (line: string): void => {
    lines.push(line);
});

rl.on('close', (): void => {
    const startTime = performance.now();
    const endTime = performance.now();
    solution();
    console.log(`time: ${endTime - startTime} ms`);
    const used = process.memoryUsage().heapUsed / (1024 * 1024);
    console.log(`memory: ${used} MB`);
});

const solution = (): void => {
    // n, a1 ~ an を受け取る
    const n: number = parseInt(lines[0], 10);
    const cards: number[] = lines[1].split(' ').map(Number);
    // alice, bobの得点
    let aliceScore: number = 0;
    let bobScore: number = 0;

    // マージソート開始用の配列
    const initialArray: number[][] = makeSortArray(cards);
    // マージソートの実行
    const resultArray: number[] = doMergeSort(initialArray);

    // aliceとbobの得点を加算
    for (let i: number = 0; i < resultArray.length; i++) {
        if (i % 2 === 0) {
            aliceScore += resultArray[i];
        } else {
            bobScore += resultArray[i];
        }
    }
    // aliceとbobの得点差を表示
    console.log(Math.abs(aliceScore - bobScore));
};

/**
 * マージソート用の配列を返却する関数
 * @param originalArray マージソートしたい配列
 * @returns 2個1セットの配列が配列になったもの 例) [[1, 2], [3, 4], ...]
 */
const makeSortArray = (originalArray: number[]): number[][] => {
    /**
     * originalArrayに関して
     * lengthが
     * 奇数 => 最後の一つの要素を取り出しておく
     * 偶数 => 特に何もしない
     */
    const returnArray: number[][] = [];
    const oddFlag: boolean = originalArray.length % 2 === 1 ? true : false;
    let oddLastNum: number = 0;

    // popの結果がundefinedのことも考慮して、一時的な代入先を用意し、numberの時だけoddLastNumに代入
    if (oddFlag) {
        const tmpNum: number | undefined = originalArray.pop();
        if (tmpNum !== undefined) {
            oddLastNum = tmpNum;
        }
    }

    // 配列の長さの半分を取得（上記で長さが奇数の場合は削ってるので、必ず偶数になるはず）
    const originalArrayHalfLength: number = originalArray.length / 2;
    
    // for分でニコイチのセット（例）[a, b](a < b)をつくって、返却用の配列に代入
    for (let i: number = 0; i < originalArrayHalfLength; i++) {
        // ニコイチセットを作る
        const a: number = i === 0 ? originalArray[i] : originalArray[i * 2 + 1];
        const b: number = i === 0 ? originalArray[i + 1] : originalArray[i * 2];
        // 大きいほうを0番目としてreturnArrayに挿入
        if (a >= b) {
            returnArray.push([a, b]);
        } else {
            returnArray.push([b, a]);
        }
    }
    return returnArray;
};

/**
 * マージソートをする関数
 * @param initialArray マージソート開始用の配列
 * @returns マージソート後の配列,数字が大きい順に並んでいる 例) [12, 10, 4, ...]
 */
const doMergeSort = (initialArray: number[][]): number[] => {
    let sortedArray: number[] = [];
    const copyInitialArray: number[][] = initialArray;
    // initialArrayの長さが1になるまでソートを行う
    while (copyInitialArray.length > 1) {
        const arrayLength: number = copyInitialArray.length;
        // 両隣をマージする、配列の長さが奇数の場合は最後の一個は何もしない
        const mergeNum: number = arrayLength % 2 === 0 ? arrayLength / 2 : (arrayLength - 1) / 2;
        
        for (let i: number = 0; i < mergeNum; i++) {
            // マージ用の配列a, bを用意
            const a: number[] = copyInitialArray[i];
            const b: number[] = copyInitialArray[i + 1];
            // マージ後の挿入用配列
            const mergeAB: number[] = [];

            // a, bが空になるまでマージ
            while (!(a.length === 0 && b.length === 0)) {
                if (a[0] >= b[0]) {
                    const tmpTop: number | undefined = a.shift();
                    if (tmpTop !== undefined) {
                        mergeAB.push(tmpTop);
                    } 
                } else {
                    const tmpTop: number | undefined = b.shift();
                    if (tmpTop !== undefined) {
                        mergeAB.push(tmpTop);
                    } 
                }
            }

            // マージした配列はinitialArrayから削除
            copyInitialArray.shift();
            copyInitialArray.shift();
            // マージ後のmergeABをinitialArrayに挿入
            copyInitialArray.unshift(mergeAB);
        }
    }
    // while分が終わったらinitialArrayは[[12, 10, 4, ...]]の形になっているので、sortedArrayにinitialArray[0]を挿入
    sortedArray = copyInitialArray[0];
    return sortedArray;
};
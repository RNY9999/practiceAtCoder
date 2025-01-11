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
    // 変換用の文字列inputStr, 変換後の文字列goalStrを受け取る
    const inputStr: string = lines[1];
    const goalStr: string = lines[2];

    // inputStrとgoalStrが一致するかどうかのフラグ
    let muchFlag: boolean = false;

    // 文字数が一致する場合
    if (inputStr.length === goalStr.length) {
        // 初めから一致している場合
        if (inputStr === goalStr) {
            muchFlag = true;
        }

        // inputStr[i]とgoalStr[i]を比較して、異なる場合は一回だけ変換する
        inputStr.split('').forEach((char: string, index: number) => {
            if (char !== goalStr[index]) {
                const copyStr: string[] = inputStr.split('');
                copyStr.splice(index, 1, goalStr[index]);

                if (copyStr.join('') === goalStr) {
                    muchFlag = true;
                }
            }
        })
    } else if (inputStr.length - goalStr.length === 1) {
        // inputStr[i]を削除してgoalStrと一致するかどうかの確認
        inputStr.split('').forEach((char: string, index: number) => {
            const copyStr: string[] = inputStr.split('');
            copyStr.splice(index, 1);
            if (copyStr.join('') === goalStr) {
                muchFlag = true;
            }
        })
    } else if (inputStr.length - goalStr.length === -1) {
        // inputStr[i]とgoalStr[i]を比較して、異なる場合は、inputStr[i]の手前にgoalStr[i]を挿入する
        
        inputStr.split('').forEach((char: string, index: number) => {
            if (char !== goalStr[index]) {
                const copyStr: string[] = inputStr.split('');
                copyStr.splice(index, 0, goalStr[index]);

                if (copyStr.join('') === goalStr) {
                    muchFlag = true;
                }
            }
        })

        // 最後の文字が異なる場合
        const editedGoalStr: string = goalStr.substring(0, inputStr.length);
        if (inputStr === editedGoalStr) {
            muchFlag = true;
        }
    }

    if (muchFlag) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}


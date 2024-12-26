import * as readline from 'readline';
import { start } from 'repl';
process.stdin.setEncoding('utf-8');

const lines: string[] = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line: string) => {
    lines.push(line);
});

rl.on('close', () => {
    const startTime = performance.now();
    solution();
    const endTime = performance.now();

    // endTime - startTime で実行時間を表示
    console.log(`実行時間：${endTime - startTime}ms`);
    // ファイル容量を表示
    const used = process.memoryUsage().heapUsed / (1024 * 1024);
    console.log(`Memory:${Math.round(used)}MB`);
});

const solution = (): void => {
    // 必要な変数を用意
    const a: number = parseInt(lines[0], 10);
    const [b, c]: number[] = lines[1].split(' ').map(Number);
    const s: string = lines[2];

    // "a+b+c s"の形式で出力
    console.log(`${a + b + c} ${s}`);
};

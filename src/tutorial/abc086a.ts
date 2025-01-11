import * as readline from 'readline';
process.stdin.setEncoding('utf-8');

const lines: string[] = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', (line: string) => {
    lines.push(line);
});

rl.on('close', () => {
    const startTime: number = performance.now();
    solution();
    const endTime: number = performance.now();

    console.log(`time : ${endTime - startTime} ms`);
    const used: number = process.memoryUsage().heapUsed / (1024 * 1024);
    console.log(`size : ${used} MB`);
});

const solution = (): void => {
    // lines[]の中身は['a b']となるのでsplit関数で取り出す。
    const [a, b]: number[] = lines[0].split(' ').map(Number);

    // a * b を2で割ったあまりによって、出力を分ける
    const result: number = a * b % 2;
    if (result) {
        console.log('Odd');
    } else {
        console.log('Even');
    }
}
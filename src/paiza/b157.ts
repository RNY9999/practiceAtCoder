import * as readline from 'readline';
process.stdin.setEncoding('utf8');

const lines: string[] = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line: string) => {
    lines.push(line);
});

rl.on('close', () => {
    // スーパーの数
    let n: number;
    // 野菜の種類
    let k: number;

    const values = lines[0].split(' ');
    //lines[0]をlinesから削除
    lines.shift();

    // parseIntとは文字列を整数に変換する関数
    // 2つ目の引数に10を入れると10進数で整数を返す
    n = parseInt(values[0], 10);
    k = parseInt(values[1], 10);

    // n, kをconsoleで出力してデバッグ
    // n, kは割り当てられる前に出力されているので、割り当て後に出力されるようにする
    console.log(`n: ${n}`);
    console.log(`k: ${k}`);

    // お店の数分for分を回し、横軸に野菜の種類、縦軸にスーパーの数を持つ2次元配列を作成
    const stores: number[][] = [];
    for (let i = 0; i < n; i++) {
        // スーパーの数だけ配列を作成、split関数で分割した文字列を数字に変換して、配列に格納
        // map関数は配列の要素を変換する関数
        // 今回は文字列を数値に変換している
        const store: number[] = lines[i].split(' ').map(Number);
        stores.push(store);
    }

    console.log(stores);
    // 最安値のお店リスト
    const minShops: number[] = [];
    // 野菜の種類分for分を回し、最安値の店はどこなのか見つける
    for (let i = 0; i < k; i++) {
        // 最安値のお店
        let minShop: number = 1;
        // 最安値
        let minPrice: number = 1000000;
        // お店の種類分for分を回し、最安値の店を見つける
        for (let j = 0; j < n; j++) {
            // 最安値よりも安い場合、最安値のお店と最安値を更新
            if (stores[j][i] < minPrice) {
                minShop = j + 1;
                minPrice = stores[j][i];
            };
        };
        // 最安値のお店をリストに追加
        minShops.push(minShop);
    };

    // 最安値のお店リストから重複を削除
    // filter関数は配列の要素を条件に応じて取り出す関数
    // indexOf関数は指定した要素が最初に現れるインデックスを返す関数
    // 今回は重複を削除している
    const uniqueMinShops = minShops.filter((x, i, self) => self.indexOf(x) === i);
    console.log(uniqueMinShops.length);
});

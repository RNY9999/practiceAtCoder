import { binarySearch } from '../alg/binarySearch';

// テストケース
const testCases = [
    { arr: [1, 2, 3, 4, 5], target: 3, expected: 2 },
    { arr: [1, 2, 3, 4, 5], target: 1, expected: 0 },
    { arr: [1, 2, 3, 4, 5], target: 5, expected: 4 },
    { arr: [1, 2, 3, 4, 5], target: 0, expected: -1 },
    { arr: [1, 2, 3, 4, 5], target: 6, expected: -1 },
    { arr: [], target: 1, expected: -1 },
    { arr: [1], target: 1, expected: 0 },
    { arr: [1], target: 2, expected: -1 },
    // arr.lengthが10^5のテスト
    { arr: [...Array(100000).keys()], target: 99999, expected: 99999 },
    { arr: [...Array(100000).keys()], target: 0, expected: 0 },
    { arr: [...Array(100000).keys()], target: 100000, expected: -1 },
];

// テスト実行
testCases.forEach(({ arr, target, expected }, index) => {
    const result = binarySearch(arr, target);
    const passed = result === expected;
    const color = passed ? '\x1b[32m' : '\x1b[31m'; // 緑: 32, 赤: 31
    const reset = '\x1b[0m'; // リセット
    console.log(`Test case ${index + 1}: ${color}${passed ? 'Passed' : `Failed (expected ${expected}, got ${result})`}${reset}`);
});
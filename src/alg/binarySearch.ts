/**
 * 二分木探索のアルゴリズムを実装
 * @param {number[]} arr - 昇順にソートされた配列
 * @param {number} target - 探索する値
 * @returns {number} - targetが見つかった場合はそのインデックス、見つからなかった場合は-1
 * @example
 * const arr = [1, 2, 3, 4, 5];
 * const target = 3;
 * const index = binarySearch(arr, target); // index = 2
 */

export const binarySearch = (arr: number[], target: number): number => {
    let returnIndex: number = -1;
    let left: number = 0;
    let right: number = arr.length - 1;
    let finishFlag: boolean = false;
    while (!finishFlag) {
        const mid: number = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            returnIndex = mid;
            finishFlag = true;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }

        if (left > right) {
            finishFlag = true;
        }
    }
    return returnIndex;
}
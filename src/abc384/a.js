"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("node:readline/promises");
var node_process_1 = require("node:process");
var rl = readline.createInterface({ input: node_process_1.stdin, output: node_process_1.stdout });
var lines = [];
rl.on('line', function (line) {
    lines.push(line);
});
rl.on('close', function () {
    solution();
});
var solution = function () {
    // lengthStr: 文字列の長さ
    // notChangeChar: 交換しない文字
    // changeChar: 交換にしようする文字
    // 上記をstring型で取得
    var _a = lines[0].split(' '), lengthStr = _a[0], notChangeChar = _a[1], changeChar = _a[2];
    // lengthをnumber型に変換
    var textLength = Number(lengthStr);
    // inputText: 文字列を取得
    var inputText = lines[1];
    // for文を回して、文字列を一文字ずつ検査して、交換しない文字以外の時に、交換する文字で置き換える
    var resultText = '';
    for (var i = 0; i < textLength; i++) {
        if (inputText[i] === notChangeChar) {
            resultText += notChangeChar;
        }
        else {
            resultText += changeChar;
        }
    }
    console.log(resultText);
};

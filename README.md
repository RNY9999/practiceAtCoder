# practiceAtCoder
AtCoder練習用

## 環境構築

### nodeのインストール

nodeがインストールされているか確認

インストールされていなければインストールする

```
// コマンドプロンプト等で確認
node -v
```

### Typescriptの環境構築

package.jsonの用意

```
//package.jsonを生成
npm init
```

TypeScriptのインストール

```
// グローバルインストール
nom i -D typescript
```

tsconfig.jsonの生成

```
npx tsc --init

// tsconfig内の設定
// sourceMap => True #デバッグ用
// incremental => True #ビルド時間短縮用
// libオプションに esnext を追加
// targetオプションに esnext を追加
```

@types/nodeのインストール
```
npm i -D @types/node
```

ソースファイルの作成
```
// ディレクトリ構成
root/
  ├ node_modules/
  ├ dist/
  ├ src/
  │   └ index.ts
  ├ package.json
  └ tsconfig.json

  // ※tsconfigでoutDirをdist/に変更
```

index.ts
```
console.log("hello world");
```

トランスパイル
```
npx tsc -p <tsconfig.jsonへのパス> <ソースファイルへのパス>
```

上記がなぜか失敗したので、以下を参考にしました

[トランスパイル参考](https://qiita.com/Yuu_tsm/items/2676a7bc5ad4fe374a18)


## 参考

[tsconfigの各項目について](https://qiita.com/ryokkkke/items/390647a7c26933940470)

[トランスパイル参考](https://qiita.com/Yuu_tsm/items/2676a7bc5ad4fe374a18)
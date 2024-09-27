# TypeScript + React + Vite のサンプル
## 概要
- [zennの記事](https://zenn.dev/sprout2000/articles/40328708afaeb9)

## 動作確認
```
npm run dev
```

## メモ
- 環境構築の[参考](https://note.shiftinc.jp/n/n9c5fcd207680)
- `tsconfig.json` の中身について
  - `tsconfig.app.json` はフロントエンドアプリ向けのTypeScirpt設定ファイル
  - `tsconfig.node.json` はNode.js環境向けのTypeScript設定ファイル(サーバーサイド向け)
  - おそらく `Next.js` のようにサーバーサイドでReactのレンダリングをする場合は両方が必要になるためイジる必要はない
- [useState](https://ja.react.dev/reference/react/useState) と [useEffect](https://ja.react.dev/reference/react/useEffect)

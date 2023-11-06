## API による動画取得・再生(ヘッドレス構成)

## 概要

Netflix の人気動画のジャンル別ランキングを取得して各タイトルイメージを設置  
ミニプレイヤーにて動画再生を行う

URL：https://mvdb-sample-app.netlify.app

## 使用技術

- Typescript
- Next.js(React)
- Netlify(ホスティングサービス)
- MVDB：Netflix のランキング情報を条件を設定して取得
- Youtube API：キーワードなどの条件を指定して動画内容を取得,Youtube Player で再生

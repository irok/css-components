# css-components

## 設計方針
* コンポーネントをできるだけ簡単に作成できるようにすることを目指しました。
* 各コンポーネントの基本構造を mixin として定義しておき、コンポーネントを書く人はそれを include して装飾だけ行えばいいようにしています。
* SMACSS や ITCSS に倣ってカテゴリを分けています。
    * Settings
        * サイト全体で利用する設定
        * 変数や mixin など、コンパイル後に残らないように定義する
    * Component
        * サイトで使うコンポーネント
        * Object を include し、足りない Element や装飾を定義する
        * プレフィクスは `c-`
    * Object
        * サイトに依存しない、コンポーネントの基本構造を mixin として定義したもの
        * プレフィクスは `o-`
    * Utility
        * サイトに依存しないユーティリティ的な機能を mixin として定義したもの
        * プレフィクスは `u-`

## 命名規則
* Mind Bemding を採用しています。
* Block（＝コンポーネント名）は PascalCase です。
* Element および Modifier は camelCase です。

BEM はただでさえ `__` や `--` によって間延び感があるため、chain-case は採用しませんでした。

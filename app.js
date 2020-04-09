"use strict"
// コマンドライン引数　 Node.js がデフォルトで提供してくれる、コマンドラインの引数が入った配列です。
// 0 番には node コマンドのファイルのパスが入り、1 番には、実行しているプログラムのファイルのパスが入る、という決まりがあるためです。
const number = process.argv[2] || 0;
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum = sum + i;
}
console.log(sum);